import { Format, Graphviz } from "@hpcc-js/wasm-graphviz";
import { Diagram, Relation, Resource } from "./schema.js";
import {
  constructError,
  diagramDirection,
  edgeDirection,
  parse,
  Path,
  typeToImage,
} from "./shared.js";
import {
  digraph,
  RootGraphModel,
  SubgraphModel,
  toDot as _toDot,
} from "ts-graphviz";

export class DiagramResolver {
  #raw: Diagram;
  #file?: string;
  #nodes: Record<string, Resource> = {};
  #edges: Array<[from: string, rel: Relation, path: Path]> = [];

  constructor(d: Diagram, file?: string) {
    this.#raw = d;
    this.#file = file;
  }

  getResource(id: string): Resource {
    return this.#nodes[id];
  }

  getLeafResourceIds(id: string): string[] {
    function getNodes(resource: Resource): string[] {
      if (resource.of) return resource.of.flatMap((x) => getNodes(x));
      return [resource.id];
    }
    return getNodes(this.getResource(id));
  }

  reduceResources<T>(
    cb: (res: Resource, prev: T, depth: number) => T | undefined,
    root: T
  ) {
    const recursive = (
      g: T,
      resources: Resource[],
      prefix?: string,
      depth = 0,
      path: Path = []
    ) => {
      resources.forEach((res, i) => {
        const { relates, of } = res;
        const id = prefix ? `${prefix}.${res.id}` : res.id;
        let currentPath = [...path, i];
        if (this.#nodes[id]) {
          currentPath = ["diagram", "resources", ...currentPath, "id"];
          throw constructError(
            `Duplicated id "${id}"`,
            currentPath,
            this.#file
          );
        }
        res.id = id;
        this.#nodes[id] = res;
        const prev = cb(res, g, depth);
        if (of && prev) {
          recursive(prev, of, id, depth + 1, currentPath);
        }
        relates?.forEach((rel, i) => {
          this.#edges.push([id, rel, [...currentPath, "relates", i]]);
        });
      });
    };

    recursive(root, this.#raw.diagram.resources);
  }

  iterateRelations(cb: (from: string[], to: string[], rel: Relation) => void) {
    this.#edges.forEach(([id, rel, path]) => {
      const { to } = rel;
      const toNode = this.getResource(to);
      if (!toNode) {
        path = ["diagram", "resources", ...path, "to"];
        throw constructError(`Unknown id "${to}"`, path, this.#file);
      }
      cb(this.getLeafResourceIds(id), this.getLeafResourceIds(to), rel);
    });
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#browser_compatibility
// Node 14.8+ ESModules
const graphviz = await Graphviz.load();

export class RenderGraphviz {
  #resolver: DiagramResolver;
  #root: RootGraphModel;
  #images: Set<string> = new Set();

  constructor(file: string) {
    const data = parse(file);
    const autolabel = data.diagram.label_resources;
    this.#resolver = new DiagramResolver(data, file);

    this.#root = digraph(
      "G",
      // @ts-expect-error
      {
        label: data.diagram.name,
        rankdir: (data.diagram.direction
          ? diagramDirection[data.diagram.direction]
          : "LR") as any,
        splines: "ortho",
        pad: 2.0,
        nodesep: 0.6,
        ranksep: 0.75,
        fontname: "Sans-Serif",
        fontsize: 15,
        fontcolor: "#2D3436" as any,
        ...data.diagram.style?.graph,
      },
      () => {}
    );
    this.#root.node(
      // @ts-expect-error
      {
        shape: "box",
        style: "rounded",
        fixedsize: "true",
        width: 1.4,
        height: 1.4,
        labelloc: "b",
        // imagepos: "tc",
        imagescale: "true",
        fontname: "Sans-Serif",
        fontsize: 13,
        fontcolor: "#2D3436",
        ...data.diagram.style?.node,
      }
    );
    this.#root.edge(
      // @ts-expect-error
      {
        color: "#7B8894",
        ...data.diagram.style?.edge,
      }
    );
    this.#resolver.reduceResources((res, g, depth) => {
      const { type, name, id } = res;
      if (type == "cluster" || type == "group") {
        const __bgcolors = ["#E5F5FD", "#EBF3E7", "#ECE8F6", "#FDF7E3"];
        return g.subgraph(type == "group" ? id : `cluster_${id}`, {
          style: "rounded",
          labeljust: "l",
          fontname: "Sans-Serif",
          fontsize: 12,
          label: type == "group" ? "" : name,
          pencolor: type == "group" ? "transparent" : "#AEB6BE",
          bgcolor:
            type == "group" ? undefined : __bgcolors[depth % __bgcolors.length],
        });
      } else {
        const label = autolabel ? type + "\n" + name : name;
        const padding = 0.4 * (label.split("\n").length - 1);
        const image = typeToImage(type);
        this.#images.add(image);

        g.node(id, {
          label,
          shape: "none",
          height: 1.9 + padding,
          image,
        });
      }
    }, this.#root as SubgraphModel | RootGraphModel);

    this.#resolver.iterateRelations((from, to, rel) => {
      const { to: _, direction, ...rest } = rel;
      this.#root.edge([from, to], {
        dir: direction ? edgeDirection[direction] : undefined,
        fontcolor: "#2D3436",
        fontname: "Sans-Serif",
        fontsize: 13,
        ...(rest as any),
      });
    });
  }

  toDot(): string {
    return _toDot(this.#root);
  }

  render(format?: Format) {
    return graphviz.dot(this.toDot(), format || "svg", {
      images: [...this.#images].map((path) => ({
        path,
        width: "256",
        height: "256",
      })),
    });
  }
}

import {
  parse as parseYaml,
  parseDocument,
  Node,
  YAMLMap,
  ParsedNode,
  YAMLSeq,
  LineCounter,
  Scalar,
} from "yaml";
import {
  digraph,
  RootGraphModel,
  SubgraphModel,
  toDot as _toDot,
} from "ts-graphviz";
import { Format, Graphviz } from "@hpcc-js/wasm-graphviz";
import { Diagram, diagramSchema, Relation, Resource } from "./schema.js";
import { checkAlias } from "./aliases.js";
import { ZodError } from "zod";

export { diagramSchema };

type Path = (string | number)[];

function traverseAst(
  ast: ParsedNode | null | Scalar<ParsedNode | null>,
  path: Path
): null | Node {
  if (path.length === 0 || ast === null) return ast;
  const [current, ...rest] = path;
  if (ast instanceof YAMLMap) {
    return traverseAst(ast.get(current, true) ?? null, rest);
  }
  if (ast instanceof YAMLSeq) {
    return traverseAst(ast.get(current, true) ?? null, rest);
  }
  throw new Error(`Unexpected node type: ${ast.constructor}`);
}

function getLineCol(file: string, path: Path) {
  const lineCounter = new LineCounter();
  const ast = parseDocument(file, { keepSourceTokens: true, lineCounter });
  const srcToken = traverseAst(ast.contents, path)?.srcToken;
  if (srcToken) return lineCounter.linePos(srcToken.offset);
}

function constructError(message: string, path: Path, file?: string) {
  const pos = file ? getLineCol(file, path) : undefined;
  return new Error(
    `${message} ${pos ? `at ${pos.line}:${pos.col} ` : ""}(${path.join("/")})`
  );
}

export function parse(file: string) {
  const rawData = parseYaml(file) as any;
  try {
    // const defaultsValues = getDefaultValues(diagramSchema);
    return diagramSchema.parse(rawData);
  } catch (e) {
    if (e instanceof ZodError) {
      const path = e.errors[0].path;
      if (e.errors[0].message === "Required") {
        const name = path[path.length - 1];
        throw constructError(
          `Required "${name}"`,
          path.slice(0, path.length - 1),
          file
        );
      }
      throw constructError(e.errors[0].message, path, file);
    }
    throw e;
  }
}

const diagramDirection = {
  "left-to-right": "LR",
  "right-to-left": "RL",
  "top-to-bottom": "TB",
  "bottom-to-top": "BT",
} as const;

const edgeDirection = {
  incoming: "back",
  outgoing: "forward",
  bidirectional: "both",
  undirected: "none",
} as const;

type Context = {
  images: Set<string>;
  nodes: Record<string, Resource>;
  edges: Array<[from: string, rel: Relation, path: Path]>;
};

function getNodes(resource: Resource): string[] {
  if (resource.of) return resource.of.flatMap((x) => getNodes(x));
  return [resource.id];
}

function iterateResources(
  g: SubgraphModel | RootGraphModel,
  resources: Resource[],
  context: Context,
  autolabel?: boolean,
  file?: string,
  prefix?: string,
  depth = 0,
  path: Path = []
) {
  resources.forEach((res, i) => {
    const { relates, of, type, name } = res;
    const id = prefix ? `${prefix}.${res.id}` : res.id;
    const currentPath = [...path, i];
    if (context.nodes[id]) {
      path = ["diagram", "resources", ...currentPath, "id"];
      throw constructError(`Duplicated id "${id}"`, path, file);
    }
    res.id = id;
    context.nodes[id] = res;
    if (type == "cluster" || type == "group") {
      const __bgcolors = ["#E5F5FD", "#EBF3E7", "#ECE8F6", "#FDF7E3"];
      g.subgraph(
        type == "group" ? id : `cluster_${id}`,
        {
          style: "rounded",
          labeljust: "l",
          fontname: "Sans-Serif",
          fontsize: 12,
          label: type == "group" ? "" : name,
          pencolor: type == "group" ? "transparent" : "#AEB6BE",
          bgcolor:
            type == "group" ? undefined : __bgcolors[depth % __bgcolors.length],
        },
        (c) => {
          if (of)
            iterateResources(
              c,
              of,
              context,
              autolabel,
              file,
              id,
              depth + 1,
              currentPath
            );
        }
      );
    } else {
      const label = autolabel ? type + "\n" + name : name;
      const padding = 0.4 * (label.split("\n").length - 1);
      const image = `https://raw.githubusercontent.com/mingrammer/diagrams/refs/heads/master/resources/${checkAlias(
        type.split(".")
      ).join("/")}.png`;
      context.images.add(image);
      g.node(id, {
        label,
        shape: "none",
        height: 1.9 + padding,
        image,
      });
    }
    relates?.forEach((rel, i) => {
      context.edges.push([id, rel, [...currentPath, "relates", i]]);
    });
  });
}

function process(data: Diagram, file?: string) {
  const context: Context = {
    images: new Set(),
    nodes: {},
    edges: [],
  };

  const graph = digraph(
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
    (g) => {
      g.node(
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
      g.edge(
        // @ts-expect-error
        {
          color: "#7B8894",
          ...data.diagram.style?.edge,
        }
      );
      iterateResources(
        g,
        data.diagram.resources,
        context,
        data.diagram.label_resources,
        file
      );

      context.edges.forEach(([id, rel, path]) => {
        const { to, direction, ...rest } = rel;
        const fromNode = context.nodes[id];
        const toNode = context.nodes[to];
        if (!toNode) {
          path = ["diagram", "resources", ...path, "to"];
          throw constructError(`Unknown id "${to}"`, path, file);
        }
        g.edge([getNodes(fromNode), getNodes(toNode)], {
          dir: direction ? edgeDirection[direction] : undefined,
          fontcolor: "#2D3436",
          fontname: "Sans-Serif",
          fontsize: 13,
          ...(rest as any),
        });
      });
    }
  );

  return { graph, images: context.images };
}

export function toDot(data: Diagram, file?: string) {
  return _toDot(process(data, file).graph);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#browser_compatibility
// Node 14.8+ ESModules
const graphviz = await Graphviz.load();

export function render(file: string, format?: Format) {
  const { graph, images } = process(parse(file), file);
  return graphviz.dot(_toDot(graph), format || "svg", {
    images: [...images].map((path) => ({
      path,
      width: "256",
      height: "256",
    })),
  });
}

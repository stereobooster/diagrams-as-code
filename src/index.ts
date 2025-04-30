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

function traverseAst(
  ast: ParsedNode | null | Scalar<ParsedNode | null>,
  path: Array<string | number>
): null | Node {
  if (path.length === 0 || ast === null) return ast;
  const [current, ...rest] = path;
  if (ast instanceof YAMLMap) {
    return traverseAst(ast.get(current, true) || null, rest);
  }
  if (ast instanceof YAMLSeq) {
    return traverseAst(ast.get(current, true) ?? null, rest);
  }
  throw new Error(`Unexpected node type: ${ast.constructor}`);
}

export function parse(file: string) {
  const rawData = parseYaml(file) as any;
  try {
    // const defaultsValues = getDefaultValues(diagramSchema);
    return diagramSchema.parse(rawData);
  } catch (e) {
    if (e instanceof ZodError) {
      const lineCounter = new LineCounter();
      const ast = parseDocument(file, { keepSourceTokens: true, lineCounter });
      const srcToken = traverseAst(ast.contents, e.errors[0].path)?.srcToken;
      if (srcToken) {
        const pos = lineCounter.linePos(srcToken?.offset);
        throw new Error(
          `${e.errors[0].message} at ${pos.line}:${
            pos.col
          } (${e.errors[0].path.join("/")})`
        );
      }
      throw new Error(
        `${e.errors[0].message} at ${e.errors[0].path.join("/")}`
      );
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
  edges: Array<[from: string, rel: Relation]>;
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
  prefix?: string,
  depth = 0
) {
  resources.forEach((res) => {
    const { relates, of, type, name } = res;
    const id = prefix ? `${prefix}.${res.id}` : res.id;
    res.id = id;
    if (context.nodes[id]) {
      throw new Error(`Duplicated id "${id}"`);
    }
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
          if (of) iterateResources(c, of, context, autolabel, id, depth + 1);
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
    relates?.forEach((rel) => {
      context.edges.push([id, rel]);
    });
  });
}

function process(data: Diagram) {
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
        data.diagram.label_resources
      );

      context.edges.forEach(([id, rel]) => {
        const { to, direction, ...rest } = rel;
        const fromNode = context.nodes[id];
        const toNode = context.nodes[to];
        if (!toNode) throw new Error(`Unknown id "${to}"`);
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

export function toDot(data: Diagram) {
  return _toDot(process(data).graph);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#browser_compatibility
// Node 14.8+ ESModules
const graphviz = await Graphviz.load();

export function render(file: string, format?: Format) {
  const { graph, images } = process(parse(file));
  return graphviz.dot(_toDot(graph), format || "svg", {
    images: [...images].map((path) => ({
      path,
      width: "256",
      height: "256",
    })),
  });
}

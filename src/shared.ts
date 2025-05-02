import {
  LineCounter,
  Node,
  ParsedNode,
  parseDocument,
  Scalar,
  YAMLMap,
  YAMLSeq,
  parse as parseYaml,
} from "yaml";
import { ZodError } from "zod";
import { diagramSchema, ResourceType } from "./schema.js";
import { checkAlias } from "./aliases.js";

export type Path = (string | number)[];

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

export function constructError(message: string, path: Path, file?: string) {
  const pos = file ? getLineCol(file, path) : undefined;
  return new Error(
    `${message} ${pos ? `at ${pos.line}:${pos.col} ` : ""}(${path.join("/")})`
  );
}

export const diagramDirection = {
  "left-to-right": "LR",
  "right-to-left": "RL",
  "top-to-bottom": "TB",
  "bottom-to-top": "BT",
} as const;

export const edgeDirection = {
  incoming: "back",
  outgoing: "forward",
  bidirectional: "both",
  undirected: "none",
} as const;

export function parse(file: string) {
  const rawData = parseYaml(file) as any;
  try {
    // const defaultsValues = getDefaultValues(diagramSchema);
    return diagramSchema.parse(rawData);
  } catch (e) {
    if (e instanceof ZodError) {
      const path = e.errors[0].path;
      if (e.errors[0].message === "Required") {
        const last = path.length - 1;
        const name = path[last];
        throw constructError(`Required "${name}"`, path.slice(0, last), file);
      }
      throw constructError(e.errors[0].message, path, file);
    }
    throw e;
  }
}

export function typeToImage(type: ResourceType) {
  return `https://raw.githubusercontent.com/mingrammer/diagrams/refs/heads/master/resources/${checkAlias(
    type.split(".")
  ).join("/")}.png`;
}

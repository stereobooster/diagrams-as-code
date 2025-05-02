export { diagramSchema } from "./schema.js";
export { parse } from "./shared.js";
// export { toDot, render } from "./v1.js";

import { Format } from "@hpcc-js/wasm-graphviz";
import { RenderGraphviz } from "./v2.js";
export function render(file: string, format?: Format) {
  return new RenderGraphviz(file).render(format);
}

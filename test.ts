import { readFileSync } from "node:fs";
import { render } from "./src/index.js";

const filePath: string = "./examples/message-collecting-gcp.yaml";
console.log(render(readFileSync(filePath, "utf8")));

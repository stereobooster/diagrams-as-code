import { readFileSync } from "node:fs";
import { parse as parseYaml } from "yaml";
import { ilographSchema } from "./ilograph";

try {
  const filePath = "experiment/example/purchase-subscription.yaml";
  const file = readFileSync(filePath, "utf8");
  const rawData = parseYaml(file) as any;
  const data = ilographSchema.parse(rawData);

  console.log(data.resources);
  // console.log(data.perspectives?.[0]);
} catch (e) {
  console.log(e.format());
}

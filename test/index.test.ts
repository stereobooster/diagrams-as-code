import fs from "node:fs/promises";
import { describe, expect, it } from "vitest";

import { render } from "../src";

describe("render", () => {
  const files = [
    "all-fields",
    "events-processing-aws",
    "exposed-pods-kubernetes",
    "message-collecting-gcp",
    "web-services-aws",
    "web-services-on-premise",
    "workers-aws",
  ];
  files.forEach((name) => {
    it(name, async () => {
      const file = await fs.readFile(
        new URL(`./yaml/${name}.yaml`, import.meta.url)
      );

      await expect(render(file.toString())).toMatchFileSnapshot(
        `./svg/${name}.svg`
      );
    });
  });
});

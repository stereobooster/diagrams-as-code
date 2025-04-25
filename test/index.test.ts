import fs from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { Resvg } from "@resvg/resvg-js";

import { render } from "../src";
import { writeFile } from "node:fs/promises";

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
    it(`${name}.svg`, async () => {
      const file = await fs.readFile(
        new URL(`./yaml/${name}.yaml`, import.meta.url)
      );

      await expect(render(file.toString())).toMatchFileSnapshot(
        `./svg/${name}.svg`
      );
    });

    // skipped because very slow
    it.skip(`${name}.png`, async () => {
      const file = await fs.readFile(
        new URL(`./yaml/${name}.yaml`, import.meta.url)
      );

      const resvg = new Resvg(render(file.toString()));
      const resolved = await Promise.all(
        resvg.imagesToResolve().map(async (url) => {
          const img = await fetch(url);
          const buffer = await img.arrayBuffer();
          return {
            url,
            buffer: Buffer.from(buffer),
          };
        })
      );
      if (resolved.length > 0) {
        for (const result of resolved) {
          const { url, buffer } = result;
          resvg.resolveImage(url, buffer);
        }
      }
      const png = resvg.render().asPng();
      await writeFile(`./test/png/${name}.png`, png);

      // await expect(png).toMatchFileSnapshot(`./png-snapshot/${name}.snapshot`);
    });
  });
});

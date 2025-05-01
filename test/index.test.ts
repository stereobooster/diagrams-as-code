import fs from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { Resvg } from "@resvg/resvg-js";
import { toMatchImageSnapshot } from "jest-image-snapshot";

import { parse, render } from "../src";

expect.extend({ toMatchImageSnapshot });

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

      // @ts-expect-error
      await expect(png).toMatchImageSnapshot();
    }, 15_000);
  });
});

describe("errors", () => {
  it(`type error`, () => {
    const file = `diagram:
  name: Web Services Architecture on AWS
  resources:
    - id: 1`;

    expect(() => parse(file)).toThrowError(
      "Expected string, received number at 4:11 (diagram/resources/0/id)"
    );
  });

  it(`missing param`, () => {
    const file = `diagram:
  name: Web Services Architecture on AWS`;

    expect(() => parse(file)).toThrowError(
      'Required "resources" at 2:3 (diagram)'
    );
  });

  it(`extra keys`, () => {
    const file = `diagram:
  name: Web Services Architecture on AWS
  resources:
    - id: dns
      name: DNS
      type: aws.network.Route53
      x: 1`;

    expect(() => render(file)).toThrowError(
      "Unrecognized key(s) in object: 'x' at 4:7 (diagram/resources/0)"
    );
  });

  it(`wrong icon`, () => {
    const file = `diagram:
  name: Web Services Architecture on AWS
  resources:
    - id: dns
      name: DNS
      type: aws.network.Route5`;

    expect(() => render(file)).toThrowError(
      'Wrong value "aws.network.Route5". Did you mean "aws.network.Route53"? at 6:13 (diagram/resources/0/type)'
    );
  });

  it(`wrong icon 2`, () => {
    const file = `diagram:
  name: Web Services Architecture on AWS
  resources:
    - id: dns
      name: DNS
      type: aws.network`;

    expect(() => render(file)).toThrowError(
      'Wrong value "aws.network" at 6:13 (diagram/resources/0/type)'
    );
  });

  it(`Unknown id`, () => {
    const file = `diagram:
  name: Web Services Architecture on AWS
  resources:
    - id: dns
      name: DNS
      type: aws.network.Route53
      relates:
        - to: elb
          direction: outgoing`;

    expect(() => render(file)).toThrowError(
      'Unknown id "elb" at 8:15 (diagram/resources/0/relates/0/to)'
    );
  });

  it(`Duplicated ids`, () => {
    const file = `diagram:
  name: Web Services Architecture on AWS
  resources:
    - id: dns
      name: DNS
      type: aws.network.Route53
    - id: dns
      name: DNS
      type: aws.network.Route53`;

    expect(() => render(file)).toThrowError(
      'Duplicated id "dns" at 7:11 (diagram/resources/1/id)'
    );
  });
});

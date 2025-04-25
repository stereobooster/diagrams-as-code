# diagrams-as-code

Port of https://github.com/dmytrostriletskyi/diagrams-as-code

## Installation

```
pnpm add diagrams-as-code
```

## Usage

```ts
import { readFileSync } from "node:fs";
import { render } from "diagrams-as-code";

const filePath = "./examples/message-collecting-gcp.yaml";
console.log(render(readFileSync(filePath, "utf8")));
```

## TODO

- [ ] embed SVG files instead of using urls (otherwise images can be blocked by Content Security Policy)
  - [postprocess SVG](https://softwarerecs.stackexchange.com/questions/76954/how-can-i-convert-an-svg-with-linked-images-to-embed-those-images-inside-the-svg)
  - use package with icons, like [aws-svg-icons](https://www.npmjs.com/package/aws-svg-icons)
- [ ] don't use `raw.githubusercontent.com`

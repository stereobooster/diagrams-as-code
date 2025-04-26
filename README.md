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

- [ ] implement [c4](https://docs.structurizr.com/dsl/language)
  - https://github.com/structurizr/json/blob/master/structurizr.yaml
- [ ] implement [ilograph](https://www.ilograph.com/docs/spec/)
- [ ] try [elk](https://github.com/kieler/elkjs) instead of Graphviz
- [ ] online demo, like [this one](https://powderizer.stereobooster.com/)
- [ ] embed SVG files instead of using urls (otherwise images can be blocked by Content Security Policy)
  - [postprocess SVG](https://softwarerecs.stackexchange.com/questions/76954/how-can-i-convert-an-svg-with-linked-images-to-embed-those-images-inside-the-svg)
  - use package with icons, like [aws-svg-icons](https://www.npmjs.com/package/aws-svg-icons)
- [ ] don't use `raw.githubusercontent.com`

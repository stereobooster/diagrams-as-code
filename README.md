# @beoe/diagrams-as-code

Port of https://github.com/dmytrostriletskyi/diagrams-as-code

## Installation

```
pnpm add @beoe/diagrams-as-code
```

## Usage

```ts
import { readFileSync } from "node:fs";
import { render } from "@beoe/diagrams-as-code";

const filePath = "./examples/message-collecting-gcp.yaml";
console.log(render(readFileSync(filePath, "utf8")));
```

## TODO

- [ ] don't use `raw.githubusercontent.com`

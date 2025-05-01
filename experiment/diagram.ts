import { Diagram, Resource } from "../src/schema.js";

export class DiagramResolver {
  constructor(d: Diagram) {}

  getImages(): string[] {
    throw Error("not implemented");
  }

  getResource(id: string): Resource {
    throw Error("not implemented");
  }

  getSubResource(id: string): Resource[] {
    throw Error("not implemented");
  }

  iterateResources(cb: (res: Resource) => void) {
    throw Error("not implemented");
  }
}

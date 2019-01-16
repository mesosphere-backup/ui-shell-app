import { injectable } from "inversify";

@injectable()
export default class ExamplePluginNavigation {
  getElements() {
    return [
      {
        path: "/edge_lb",
        name: "Edge LB"
      },
      {
        parent: "/edge_lb",
        path: "/edge_lb/overview",
        name: "Overview"
      }
    ];
  }
}

import { injectable } from "inversify";

export default context => {
  @injectable()
  class ExamplePluginNavigation {
    getElements() {
      return [
        {
          path: `/${context.id}/edge_lb`,
          name: `Edge LB ${context.name}`
        },
        {
          parent: `/${context.id}/edge_lb`,
          path: `/${context.id}/edge_lb/overview`,
          name: "Overview"
        }
      ];
    }
  }
  return ExamplePluginNavigation;
};

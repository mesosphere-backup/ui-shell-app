import { injectable } from "inversify";

export default context => {
  @injectable()
  class ExamplePluginNavigation {
    getElements() {
      return [
        {
          path: `/${context.id}/edge_lb/overview`,
          name: `Edge LB ${context.name}`
        }
      ];
    }
  }
  return ExamplePluginNavigation;
};

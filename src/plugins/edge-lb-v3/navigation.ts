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
    get id() {
      return context.id;
    }
  }
  return ExamplePluginNavigation;
};

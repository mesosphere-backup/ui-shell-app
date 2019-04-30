import { injectable } from "inversify";

export default context => {
  @injectable()
  class ExamplePluginNavigation {
    getElements() {
      return [
        {
          path: `/edge_lb`,
          name: `Edge LB`,
          duplicable: true
        },
        {
          parent: `/edge_lb`,
          path: `/${context.id}/edge_lb/overview`,
          name: `Overview ${context.name}`
        }
      ];
    }
  }
  return ExamplePluginNavigation;
};

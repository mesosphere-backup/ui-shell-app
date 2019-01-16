import { ContainerModule } from "inversify";
import ExamplePluginNavigation from "./navigation";
import ExamplePluginRouting from "./routing";
import {
  NavigationServiceExtension,
  RoutingServiceExtension
} from "../../core";

export default (_context = {}) =>
  new ContainerModule((bind, _unbind) => {
    bind(NavigationServiceExtension)
      .to(ExamplePluginNavigation)
      .inSingletonScope();
    bind(RoutingServiceExtension)
      .to(ExamplePluginRouting)
      .inSingletonScope();
  });

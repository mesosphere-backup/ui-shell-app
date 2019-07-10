import { ContainerModule } from "inversify";
import Navigation from "./navigation";
import Routing from "./routing";
import {
  NavigationServiceExtension,
  RoutingServiceExtension
} from "../../core";

export default (context = {}) =>
  new ContainerModule((bind, _unbind) => {
    bind(NavigationServiceExtension)
      .to(Navigation(context))
      .inSingletonScope();
    bind(RoutingServiceExtension)
      .to(Routing(context))
      .inSingletonScope();
  });

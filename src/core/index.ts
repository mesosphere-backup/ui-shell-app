import { ContainerModule } from "inversify";
import { bindExtensionProvider } from "extension-kid";
import ApplicationProvider, {
  ApplicationExtension
} from "./ApplicationProvider";
import NavigationService, {
  NavigationServiceExtension,
  INavigationExtension
} from "./NavigationService";
import RoutingService, {
  RoutingServiceExtension,
  IRoutingExtension
} from "./RoutingService";

export {
  ApplicationExtension,
  NavigationService,
  NavigationServiceExtension,
  INavigationExtension,
  RoutingService,
  RoutingServiceExtension,
  IRoutingExtension
};

export default new ContainerModule((bind, _unbind) => {
  bindExtensionProvider(bind, ApplicationExtension);
  bind(ApplicationProvider)
    .toSelf()
    .inSingletonScope();
  bindExtensionProvider(bind, RoutingServiceExtension);
  bind("RoutingService")
    .to(RoutingService)
    .inSingletonScope();
  bindExtensionProvider(bind, NavigationServiceExtension);
  bind("NavigationService")
    .to(NavigationService)
    .inSingletonScope();
});

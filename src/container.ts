import { ContainerModule } from "inversify";
import { Container, bindExtensionProvider } from "extension-kid";
import UIKitApplication from "./UIKitApplication";
import Application, { ApplicationExtension } from "./Application";

const applicationModule = new ContainerModule((bind, _unbind) => {
  bindExtensionProvider(bind, ApplicationExtension);
  bind(Application)
    .toSelf()
    .inSingletonScope();
});

const container = new Container();
container.load(applicationModule);
container
  .bind(ApplicationExtension)
  .to(UIKitApplication)
  .inSingletonScope();

export default container;

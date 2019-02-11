import { Container } from "@extension-kid/core";
import ReactApplication from "./ReactApplication";
import core, { ApplicationExtension } from "./core";

import examplePlugin from "./plugins/example-plugin";

const container = new Container();
container.load(core);
container.load(examplePlugin());
container
  .bind(ApplicationExtension)
  .to(ReactApplication)
  .inSingletonScope();

export default container;

import { Container } from "@extension-kid/core";
import ReactApplication from "./ReactApplication";
import core, { ApplicationExtension } from "./core";

import edgeLB1 from "./plugins/edge-lb-v1";
import edgeLB2 from "./plugins/edge-lb-v2";
import edgeLB3 from "./plugins/edge-lb-v3";

const container = new Container();
container.load(core);
container.load(edgeLB1({ id: "asdkjlheflkjhef", name: "alpha" }));
container.load(edgeLB1({ id: "aaaefefefefefef", name: "beta" }));
container.load(edgeLB2({ id: "w3erergjwelgrnjwelrgkj", name: "charly" }));
container.load(edgeLB3({ id: "rkethnkmnertyefgkjnb", name: "delta" }));

container
  .bind(ApplicationExtension)
  .to(ReactApplication)
  .inSingletonScope();

export default container;

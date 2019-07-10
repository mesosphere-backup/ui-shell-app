import { injectable } from "inversify";
import { Container } from "@extension-kid/core";
import ReactApplication from "./ReactApplication";
import core, { ApplicationExtension } from "./core";

import edgeLB1 from "./plugins/edge-lb-v1";
import edgeLB2 from "./plugins/edge-lb-v2";

const container = new Container();
container.load(core);

@injectable()
class PluginRegistryMapFactory {
  private pluginMap = {};

  add = (id, plugin) => {
    this.pluginMap[id] = plugin;
    container.load(plugin);
  };

  remove = id => {
    container.unload(this.pluginMap[id]);
    debugger;
    delete this.pluginMap[id];
  };
}

container
  .bind("removR")
  .to(PluginRegistryMapFactory)
  .inSingletonScope();

const plugins = container.get("removR");

plugins.add(
  "asdkjlheflkjhef",
  edgeLB1({ id: "asdkjlheflkjhef", name: "alpha" })
);
plugins.add(
  "aaaefefefefefef",
  edgeLB1({ id: "aaaefefefefefef", name: "beta" })
);
plugins.add("w3erergj", edgeLB2({ id: "w3erergj", name: "charly" }));

setTimeout(() => {
  import(/* webpackChunkName: "edgelb3" */ "./plugins/edge-lb-v3").then(
    ({ default: edgeLB3 }) => {
      plugins.add(
        "rkethnkmnertyefgkjnb",
        edgeLB3({ id: "rkethnkmnertyefgkjnb", name: "delta" })
      );
    }
  );
}, 1000);

container
  .bind(ApplicationExtension)
  .to(ReactApplication)
  .inSingletonScope();

export default container;

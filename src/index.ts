import container from "./container";
import Application from "./core/ApplicationProvider";

const application: Application = container.get(Application);

application.start();

import container from "./container";
import Application from "./Application";

const application: Application = container.get(Application);

application.start();

import { injectable } from "inversify";

import React from "react";
import ReactDOM from "react-dom";

import ShellApp from "./ShellApp";

@injectable()
export default class UIKitApplication {
  onStart() {
    ReactDOM.render(
      React.createElement(ShellApp),
      document.getElementById("app")
    );
  }
}

import { injectable } from "inversify";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import AppShell from "./components/AppShell";

@injectable()
export default class ReactApplication {
  onStart() {
    ReactDOM.render(
      React.createElement(Router, {}, React.createElement(AppShell)),
      document.getElementById("app")
    );
  }
}

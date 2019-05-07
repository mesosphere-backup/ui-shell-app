import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import AppShell from "./components/AppShell";

// dynamically loading stuff!
setTimeout(() => {
  import("./plugins/edge-lb-v1");
}, 500);

ReactDOM.render(
  <Router>
    <AppShell />
  </Router>,
  document.getElementById("app")
);

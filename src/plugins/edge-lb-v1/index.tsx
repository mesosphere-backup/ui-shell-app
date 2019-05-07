import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import PageContent from "./components/PageContent";
import Navigation from "../../core/Navigation";
import Routing from "../../core/Routing";

import * as ui from "@dcos/ui-kit";

const runningTasks = ["task_1", "task_2"];

defineElement(
  "edge-lb-1-navbar",
  <Router>
    <ui.SidebarSection label="Edge LB">
      <ui.SidebarItem isActive onClick={() => {}}>
        {runningTasks.map(t => (
          <ui.SidebarItemLabel key={t}>
            <Link to={`/edgelb/${t}/overview`}>{t}</Link>
          </ui.SidebarItemLabel>
        ))}
      </ui.SidebarItem>
    </ui.SidebarSection>
  </Router>
);
Navigation.add("edge-lb-1-navbar");

defineElement(
  "edge-lb-1-routing",
  runningTasks.map(t => (
    <Router key={t}>
      <Route
        path={`/edgelb/${t}/overview`}
        component={PageContent({ id: t })}
      />
    </Router>
  ))
);
Routing.add("edge-lb-1-routing");

function defineElement(tag, content) {
  customElements.define(
    tag,
    class extends HTMLElement {
      constructor() {
        super();
        render(content, this);
      }
    }
  );
}

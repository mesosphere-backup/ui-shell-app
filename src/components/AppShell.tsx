import React from "react";

import { AppChrome } from "@dcos/ui-kit";

import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import Navigation from "../core/Navigation";
import Routing from "../core/Routing";

interface Model {
  sidebarIsOpen: boolean;
  routes: string[];
  contentPanes: string[];
}

export default class AppShell extends React.Component<{}, Model> {
  state = { sidebarIsOpen: true, routes: [], contentPanes: [] };

  constructor(props) {
    super(props);

    Navigation.onChange(customElements => {
      this.setState({ routes: customElements });
    });
    Routing.onChange(customElements => {
      this.setState({ contentPanes: customElements });
    });
  }

  handleMenuClick = () => {
    this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen });
  };

  render() {
    return (
      <AppChrome
        sidebar={
          <AppSidebar
            routes={this.state.routes}
            sidebarIsOpen={this.state.sidebarIsOpen}
          />
        }
        headerBar={<AppHeader onMenuClick={this.handleMenuClick} />}
        mainContent={
          <div>
            {this.state.contentPanes.length > 0 ? (
              this.state.contentPanes.map(pane =>
                React.createElement(pane, { key: pane })
              )
            ) : (
              <div style={{ textAlign: "center" }}>
                No Plugins registered yet...
              </div>
            )}
          </div>
        }
      />
    );
  }
}

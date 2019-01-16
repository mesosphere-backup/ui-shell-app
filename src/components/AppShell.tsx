import React from "react";

import { AppChrome } from "@dcos/ui-kit";

import { RoutingService } from "../core";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import container from "../container";

interface AppState {
  sidebarIsOpen: boolean;
}

export default class AppShell extends React.Component<{}, AppState> {
  state = {
    sidebarIsOpen: true
  };

  handleMenuClick = () => {
    this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen });
  };

  render() {
    const RoutingService: RoutingService = container.get("RoutingService");

    return (
      <AppChrome
        sidebar={<AppSidebar sidebarIsOpen={this.state.sidebarIsOpen} />}
        headerBar={<AppHeader onMenuClick={this.handleMenuClick} />}
        mainContent={RoutingService.getRoutes({})}
      />
    );
  }
}

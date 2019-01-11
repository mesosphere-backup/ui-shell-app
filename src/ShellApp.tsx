import React from "react";
import { AppChrome } from "@dcos/ui-kit";

import AppSidebar from "./components/AppSidebar";
import AppHeader from "./components/AppHeader";

import Page from "./pages/Page";

interface AppState {
  sidebarIsOpen: boolean;
}

export default class ShellApp extends React.Component<{}, AppState> {
  state = {
    sidebarIsOpen: true
  };

  handleMenuClick = () => {
    this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen });
  };

  render() {
    return (
      <AppChrome
        sidebar={<AppSidebar sidebarIsOpen={this.state.sidebarIsOpen} />}
        headerBar={<AppHeader onMenuClick={this.handleMenuClick} />}
        mainContent={
          <Page>
            <div style={{ textAlign: "center" }}>
              <img width="1000" src="./edgelb.png" />
            </div>
          </Page>
        }
      />
    );
  }
}

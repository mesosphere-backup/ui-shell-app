import React from "react";
import { Route } from "react-router";
import { injectable } from "inversify";
import PageContent from "./components/PageContent";

export default context => {
  @injectable()
  class ExamplePluginRouting {
    getRoutes(_partialNextState) {
      return [
        <Route
          path={`/${context.id}/edge_lb/overview`}
          component={PageContent(context)}
        />
      ];
    }
  }
  return ExamplePluginRouting;
};

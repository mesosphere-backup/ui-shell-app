import React from "react";
import { Route } from "react-router";
import { injectable } from "inversify";
import PageContent from "./components/PageContent";

@injectable()
export default class RepositoriesRouting {
  getRoutes(_partialNextState) {
    return [<Route path="/edge_lb/overview" component={PageContent} />];
  }
}

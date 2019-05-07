import React from "react";
import { Sidebar } from "@dcos/ui-kit";

export default ({ sidebarIsOpen, routes }) => {
  return (
    <Sidebar isOpen={sidebarIsOpen}>
      {routes.map(r => React.createElement(r, { key: r }))}
    </Sidebar>
  );
};

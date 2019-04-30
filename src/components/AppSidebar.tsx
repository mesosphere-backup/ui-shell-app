import React from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarItem,
  SidebarItemLabel,
  SidebarSection
} from "@dcos/ui-kit";

import { NavigationService } from "../core";
import container from "../container";

export default ({ sidebarIsOpen }: { sidebarIsOpen: boolean }) => {
  const NavigationService: NavigationService = container.get(
    "NavigationService"
  );

  return (
    <Sidebar isOpen={sidebarIsOpen}>
      {NavigationService.getDefinition().map((item, _index) => {
        return item.children ? (
          <SidebarSection label={item.name}>
            {item.children.map((element, _index) => (
              <SidebarItem isActive onClick={() => {}}>
                <SidebarItemLabel>
                  <Link to={element.path}>{element.name}</Link>
                </SidebarItemLabel>
              </SidebarItem>
            ))}
          </SidebarSection>
        ) : (
          <Link to={item.path}>{item.name}</Link>
        );
      })}
    </Sidebar>
  );
};

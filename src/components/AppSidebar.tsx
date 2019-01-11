import React from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemLabel,
  SidebarSection
} from "@dcos/ui-kit";

export default ({ sidebarIsOpen }: { sidebarIsOpen: boolean }) => {
  return (
    <Sidebar isOpen={sidebarIsOpen}>
      <SidebarSection label="Settings">
        <SidebarItem isActive onClick={() => {}}>
          <SidebarItemLabel>Load balancers</SidebarItemLabel>
        </SidebarItem>
      </SidebarSection>
    </Sidebar>
  );
};

import React from "react";
import styled, { css, cx } from "react-emotion";
import { HeaderBar } from "@dcos/ui-kit";

import MenuButton from "./MenuButton";

// This could be imported from ui-kit style utils when they become available
const flexStrategy = {
  shrink: css`
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    width: initial;
    box-sizing: border-box;
    padding-left: 16px;
  `,
  grow: css`
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    width: auto;
    box-sizing: border-box;
    padding-left: 16px;
  `
};

const StyledHeaderContainer = styled("div")`
  align-items: center;
  display: flex;
  width: 100%;
`;

interface AppHeaderProps {
  onMenuClick: () => void;
}

export default ({ onMenuClick }: AppHeaderProps) => {
  return (
    <HeaderBar>
      <StyledHeaderContainer>
        <MenuButton className={cx(flexStrategy.shrink)} onClick={onMenuClick}>
          ☰
        </MenuButton>
        <div className={cx(flexStrategy.grow)}>Mesosphere Edge LB</div>
        <div className={cx(flexStrategy.shrink)}>Customer Name</div>
        <div className={cx(flexStrategy.shrink)}>alice@example.com</div>
      </StyledHeaderContainer>
    </HeaderBar>
  );
};

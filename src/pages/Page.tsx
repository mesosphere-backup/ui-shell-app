import React from "react";
import styled from "react-emotion";

// Should be imported from ui-kit when possible
const StyledPage = styled("div")`
  margin: 16px;
`;

export default ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return <StyledPage>{children}</StyledPage>;
};

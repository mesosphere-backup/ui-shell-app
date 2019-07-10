import React from "react";
import styled from "react-emotion";

// Should be imported from ui-kit when possible
const StyledPage = styled("div")`
  margin: 16px;
`;

export default context => () => (
  <StyledPage>
    <div style={{ textAlign: "center" }}>v3 {context.id}</div>
  </StyledPage>
);

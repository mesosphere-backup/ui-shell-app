import React from "react";
import styled from "react-emotion";

// Should be imported from ui-kit when possible
const StyledPage = styled("div")`
  margin: 16px;
`;

export default class PageContent extends React.Component<{}> {
  render() {
    return (
      <StyledPage>
        <div style={{ textAlign: "center" }}>
          <img width="1000" src="./edgelb.png" />
        </div>
      </StyledPage>
    );
  }
}

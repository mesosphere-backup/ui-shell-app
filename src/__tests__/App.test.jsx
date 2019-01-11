import React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("App", () => {
  it("renders without error", () => {
    const app = shallow(<App />);
    expect(app).not.toEqual(null);
  });
});

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AppShell from "../../src/AppShell";

configure({ adapter: new Adapter() });

describe("First React Component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<AppShell />);
  });
});

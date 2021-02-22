import React from "react";
import App from "../../src/App";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
afterEach(cleanup);
it("snapshot test", () => {
  const appTest = renderer.create(<App />).toJSON();
  expect(appTest).toMatchSnapshot();
});
it("Check if testing environment is working", () => {
  expect(1 + 1).toEqual(2);
});

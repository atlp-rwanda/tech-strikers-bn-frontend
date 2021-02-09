import React from "react";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import App from "../../src/App";

afterEach(cleanup);
it("snapshot test", () => {
  const appTest = renderer.create(<App />).toJSON();
  expect(appTest).toMatchSnapshot();
});

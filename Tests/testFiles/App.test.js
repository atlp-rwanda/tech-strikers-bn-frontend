import React from "react";
import App from "../../src/App";
import renderer from "react-test-renderer";

it("snapshot test", () => {
  const appTest = renderer.create(<App />).toJSON();
  expect(appTest).toMatchSnapshot();
});

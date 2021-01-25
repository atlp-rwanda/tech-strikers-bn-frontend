/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import App from "../src/App";

it("snapshot test", () => {
  const appTest = renderer.create(<App />).toJSON();
  expect(appTest).toMatchSnapshot();
});

import React from "react";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Formik } from "formik";
import Signup from "../../src/components/Signup";
import Navbar from "../../src/components/Navbar";

configure({ adapter: new Adapter() });

describe("SignupForm", () => {
  it("should update email field", () => {
    const tree = shallow(<Navbar />);
    const modals = (props = { errors: {} }) =>
      tree.find(Signup).dive().find(Formik).renderProp("children")(props);
    const signup = modals({
      values: { username: "duncan" },
      touched: { username: "duncan" },
      errors: { username: "duncan" },
      isSubmitting: true,
    });
  });
});

import React, { Component } from "react";
import axios from "axios";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "./Button";
import authIcon from "../assets/image/userAuthIcon.png";
import Modals from "./Modals";
import signupSchema from "../validation/SignupValidation";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupSuccess: "",
      signupError: "",
    };
    this.setSignupError = this.setSignupError.bind(this);
    this.setSignupSuccess = this.setSignupSuccess.bind(this);
    this.postData = this.postData.bind(this);
  }

  setSignupSuccess(message) {
    this.setState({ signupSuccess: message });
  }

  setSignupError(error) {
    this.setState({ signupError: error });
  }

  async postData(credentials, object) {
    const { setSubmitting, resetForm } = object;
    try {
      const { data } = await axios.post(
        `${process.env.APP_URL}/api/v1/user/signup`,
        credentials
      );
      this.setSignupSuccess(data.message);
      this.setSignupError("");
      setSubmitting(true);
      resetForm();

      setTimeout(() => {
        alert("Check your email for email confirmation");
        resetForm();
        setSubmitting(false);
      }, 500);
    } catch (error) {
      const { data } = error.response;
      Window.Location("/");
      this.setSignupError(data.error);
      this.setSignupSuccess("");
    }
  }

  render() {
    const { onShow, onClose } = this.props;
    const { signupError, signupSuccess } = this.state;
    return (
      <>
        <Modals onShow={onShow} onClose={onClose}>
          <div className="icon-login-div">
            <img src={authIcon} className="authIcon" />
            Signup
          </div>
          <Formik
            validationSchema={signupSchema}
            initialValues={{
              fullname: "",
              password: "",
              email: "",
              username: "",
            }}
            // eslint-disable-next-line max-len
            onSubmit={(values, { setSubmitting, resetForm }) =>
              this.postData(values, { setSubmitting, resetForm })
            }
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                {signupSuccess && (
                  <span className="text-primary">{signupSuccess}</span>
                )}
                {signupError && (
                  <span className="text-danger">{signupError}</span>
                )}
                <Form.Group controlId="formGroupUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    value={values.username}
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Enter username"
                    onBlur={handleBlur}
                    className={
                      touched.username && errors.username ? "error" : null
                    }
                  />
                  {touched.username && errors.username ? (
                    <span className="text-danger">{errors.username}</span>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="formGroupfullname">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={values.fullname}
                    name="fullname"
                    onChange={handleChange}
                    placeholder="Enter fullname"
                    onBlur={handleBlur}
                    className={
                      touched.fullname && errors.fullname ? "error" : null
                    }
                  />
                  {touched.fullname && errors.fullname ? (
                    <span className="text-danger">{errors.fullname}</span>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter email"
                    onBlur={handleBlur}
                    className={touched.email && errors.email ? "error" : null}
                  />
                  {touched.email && errors.email ? (
                    <span className="text-danger">{errors.email}</span>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={values.password}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      touched.password && errors.password ? "error" : null
                    }
                  />
                  {touched.password && errors.password ? (
                    <span className="text-danger">
                      {errors.password}
                      <br />
                    </span>
                  ) : null}
                  <a href="#" className="reset-pass-link">
                    Forgot Password?
                  </a>
                </Form.Group>

                <Button
                  className="login-submit"
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  text="Signup"
                />
              </Form>
            )}
          </Formik>
        </Modals>
      </>
    );
  }
}

export default Signup;

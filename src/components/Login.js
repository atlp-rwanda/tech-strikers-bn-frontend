import React from "react";
import { Modal } from "react-bootstrap";
import Button from "./Button";
import Alert from "react-bootstrap/Alert";
import { Redirect } from "react-router";
import authIcon from "../assets/image/userAuthIcon.png";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { login } from "../store/actions/login";
import PropTypes from "prop-types";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
      errorMsg: "",
      redirect: false,
      isLoading: false,
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    this.props
      .login(this.state)
      .then((res) => {
        this.setState({ isLoading: false });
        if (res.data.token) {
          this.setState({ redirect: true });
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => {
        this.setState({
          error: true,
          isLoading: false,
        });
        setTimeout(() => this.setState({ error: false }), 5000);
        let loginErr = err.response.data;
        if (loginErr.error) {
          this.setState({ errorMsg: loginErr.error });
        } else if (loginErr.Error) {
          this.setState({ errorMsg: loginErr.Error });
        }
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Modal
        show={this.props.onShow}
        className="modal"
        onHide={this.props.onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <div className="icon-login-div">
          <img src={authIcon} className="authIcon"></img>
          Login
        </div>
        <Modal.Body>
          <Alert variant="danger" show={this.state.error}>
            {this.state.errorMsg}
          </Alert>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onInput={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onInput={this.handleFieldChange}
              />
              <a href="#" className="reset-pass-link">
                Forgot Password?
              </a>
            </Form.Group>

            <Button
              className="login-submit"
              variant="primary"
              type="submit"
              disabled={this.state.isLoading}
              text={this.state.isLoading ? "Loading..." : "Login"}
            />
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);

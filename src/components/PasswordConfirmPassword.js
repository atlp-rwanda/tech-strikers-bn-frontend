import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { resetPassword } from "../actions/resetPasswordActions";

class PasswordConfirmPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
      error: false,
      errorMsg: "",
      redirect: false,
      loading: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    const { token } = this.props;

    this.props.sendPassword(token, data);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Form onSubmit={this.handleSubmit}>
            <h3>Fill in the password and confirm it</h3>

            <Form.Group controlId="formGroupEmail">
              <Form.Control
                type="password"
                name="password"
                placeholder="enter password"
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="re-enter password"
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <div className="form-group">
              <Button className="login-submit" variant="primary" type="submit">
                Send
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendPassword: (token, data) => dispatch(resetPassword(token, data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordConfirmPassword);

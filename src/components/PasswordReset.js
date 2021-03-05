import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { resetEmail } from "../actions/resetPasswordActions";
class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: false,
      errorMsg: "",
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };
    this.props.sendEmail(data);
    this.setState({
      redirect: true,
    });
    // alert('check your email to reset your password!')
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/password_reset" />;
    }
    return (
      <div>
        <Navbar />
        <div className="login-passreset">
          <Form onSubmit={this.handleSubmit}>
            <h3>Fill in the email to reset your password</h3>
            <div className="form-group">
              <Form.Group controlId="formGroupEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
            </div>
            <div className="form-group">
              <Button
                className="login-submit-btn"
                variant="primary"
                type="submit"
              >
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
    sendEmail: (email) => dispatch(resetEmail(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);

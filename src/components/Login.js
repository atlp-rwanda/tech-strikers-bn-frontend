import React from "react";
import { Modal, Button } from "react-bootstrap";
import GoogleFacebookLogin from "./GoogleFacebookLogin";
import authIcon from "../assets/image/userAuthIcon.png";
import Form from "react-bootstrap/Form";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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

    axios
      .post(
        "https://strikers2020.herokuapp.com/api/v1/auth/siginIn",
        this.state
      )
      .then((res) => {
        console.log(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
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
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={this.handleFieldChange}
              />
              {}
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleFieldChange}
              />
              <a href="#" className="reset-pass-link">
                Forgot Password?
              </a>
            </Form.Group>

            <Button className="login-submit" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <GoogleFacebookLogin />
      </Modal>
    );
  }
}

export default Login;

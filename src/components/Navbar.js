import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import GoogleFacebookLogin from "./GoogleFacebookLogin";
import Form from "react-bootstrap/Form";
import authIcon from "../assets/image/userAuthIcon.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { show } = this.state;
    return (
      <>
        <div
          className="d-flex bd-highlight p-2 text-white"
          style={{ background: "#061437" }}
        >
          <div className="mr-auto flex-grow-1 p-2 bd-highlight">
            Barefoot Nomad
          </div>
          <button
            type="button"
            onClick={this.handleShow}
            className="p-2 bd-highlight signup-btn"
          >
            Signup
          </button>

          <button
            type="button"
            className="ml-auto p-2 bd-highlight login-btn"
            onClick={this.handleShow}
          >
            Login
          </button>
          <Modal
            show={show}
            className="modal"
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton />
            <div className="icon-login-div">
              <img src={authIcon} className="authIcon" />
              Login
            </div>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <a href="#" className="reset-pass-link">
                    Forgot Password?
                  </a>
                </Form.Group>

                <Button
                  className="login-submit"
                  variant="primary"
                  type="submit"
                  size="lg"
                >
                  Login
                </Button>
              </Form>
            </Modal.Body>
            <GoogleFacebookLogin />
          </Modal>
        </div>
      </>
    );
  }
}

export default Navbar;

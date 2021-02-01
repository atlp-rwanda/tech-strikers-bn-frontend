import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

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
          <div onClick={this.handleShow} className="p-2 bd-highlight">
            Signup
          </div>
          <Modal show={show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <span onClick={this.handleClose}>X</span>
              <Modal.Title>Modal Heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button
                href="/dashboard"
                variant="primary"
                onClick={this.handleClose}
              >
                Register
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="ml-auto p-2 bd-highlight" onClick={this.handleShow}>
            Login
          </div>
        </div>
      </>    );
  }
}

export default Navbar;

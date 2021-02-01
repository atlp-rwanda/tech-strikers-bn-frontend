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
      <nav
        style={{ backgroundColor: "#061437", color: "#000000" }}
        className="navbar navbar-expand-lg navbar bg text-white"
      >
        <div style={{ color: "#000000" }} className="container-fluid">
          <a className="navbar-brand" href="#h">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <a className="nav-link active" aria-current="page" href="#h">
                Home
              </a>
              <a className="nav-link" onClick={this.handleShow}>
                Signup
              </a>
              <Modal show={show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <span className="left" onClick={this.handleClose}>
                    {" "}
                    X
                  </span>
                  <Modal.Title>Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <a className="nav-link" href="#h">
                Pricing
              </a>
              <a
                className="nav-link disabled"
                href="#h"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

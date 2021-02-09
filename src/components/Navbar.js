import React, { Component } from "react";
import Login from "./Login.js";

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
          <button className="p-2 bd-highlight signup-btn">Signup</button>

          <button
            className="ml-auto p-2 bd-highlight login-btn"
            onClick={this.handleShow}
          >
            Login
          </button>
          <Login onShow={this.state.show} onClose={this.handleClose} />
        </div>
      </>
    );
  }
}

export default Navbar;

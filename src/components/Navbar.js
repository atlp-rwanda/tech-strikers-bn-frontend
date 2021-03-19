import React, { Component } from "react";
import Signup from "./Signup";

class Navbar extends Component {
  constructor(props) {
    super(props);
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
          <Signup onShow={show} onClose={this.handleClose} />

          <button type="button" className="ml-auto p-2 bd-highlight login-btn">
            Login
          </button>
        </div>
      </>
    );
  }
}
export default Navbar;

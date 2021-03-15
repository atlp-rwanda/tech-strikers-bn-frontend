import React, { Component } from "react";
import Login from "./Login.js";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      loginShow: false,
      error: false,
    };
    this.loginModalShow = this.loginModalShow.bind(this);
    this.loginModalClose = this.loginModalClose.bind(this);
  }

  loginModalClose() {
    this.setState({
      loginShow: false,
      error: false,
      errorMsg: "",
    });
  }

  loginModalShow() {
    this.setState({ loginShow: true });
  }

  render() {
    const { loginShow, error } = this.state;
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
            onClick={this.loginModalShow}
          >
            Login
          </button>
          <Login
            onShow={loginShow}
            onClose={this.loginModalClose}
            onAlert={error}
          />
        </div>
      </>
    );
  }
}

export default Navbar;

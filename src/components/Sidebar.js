import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <>
        <h4>
          <p>
            {" "}
            <Link className="text-white p-3" to="/dashboard">
              dashboard
            </Link>
          </p>
        </h4>{" "}
        <h4>
          <p>
            <Link className="text-white p-3" to="/new_request">
              New request
            </Link>
          </p>
        </h4>{" "}
        <h4>
          <p>
            {" "}
            <Link className="text-white p-3" to="/view_requests">
              My requests
            </Link>
          </p>
        </h4>
        <h4>
          <p>
            <Link className="text-white p-3" to="/profile">
              Profile
            </Link>
          </p>
        </h4>
      </>
    );
  }
}

export default Sidebar;

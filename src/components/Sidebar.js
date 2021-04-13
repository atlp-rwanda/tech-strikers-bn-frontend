import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <>
        <p className="text-white">
          <h3> My Dashboard</h3>
          <Link className="text-white p-3" to="/dashboard">
            dashboard
          </Link>
        </p>
        <p>
          <h3 className="text-white">Requests</h3>
          <Link className="text-white p-3" to="#h">
            Make Request
          </Link>{" "}
          <p>
            <Link className="text-white p-3" to="#h">
              View the Request
            </Link>
          </p>
        </p>
        <p>
          <h5 className="text-white"> ACCOMMODATION</h5>
          <Link className="text-white p-3" to="#h">
            View all Accommodation
          </Link>
        </p>
        <p>
          <h4 className="text-white"> ADMIN PANNEL</h4>
          <Link className="text-white p-3" to="/Roles">
            Roles Management
          </Link>
        </p>
      </>
    );
  }
}

export default Sidebar;

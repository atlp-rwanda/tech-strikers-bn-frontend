import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import DashboardNavbar from "./components/DashboardNavbar";

class AppShell extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <DashboardNavbar />
        <div className="container-fluid">
          <div className="row content">
            <div
              className="col-sm-2 sidenav"
              style={{ backgroundColor: "#061437" }}
            >
              <Sidebar />
            </div>
            <div className="col-sm-9">{children}</div>
          </div>
        </div>
        <Footer className="fixed-bottom" />
      </>
    );
  }
}

export default AppShell;

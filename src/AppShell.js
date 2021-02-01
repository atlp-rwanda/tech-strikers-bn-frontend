import React, { Component } from "react";
import DashboardNavbar from "./components/DashboardNavbar";
import Sidebar from "./components/Sidebar";

class AppShell extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <section className="row">
          <main className="col-12">
            <DashboardNavbar />
          </main>
        </section>
        <section className="row">
          <main className="col-3" style={{ background: "#061437" }}>
            <Sidebar />
          </main>
          <main className="col-9">{children}</main>
        </section>
      </div>
    );
  }
}

export default AppShell;
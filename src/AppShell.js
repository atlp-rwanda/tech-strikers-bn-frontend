import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import DashboardNavbar from "./components/DashboardNavbar";

class AppShell extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="d-flex bd-highlight">
        <section
          className="d-flex flex-row py-3 position-sticky sticky-top px-5 p-4 "
          style={{ background: "#061437" }}
        >
          <Sidebar />
        </section>
        <section className=" flex-grow-1">
          <main className="  mr-auto sticky-top  ">
            <DashboardNavbar />
          </main>
          <main className="mr-auto p-4 sticky-top flex-grow-1 px-4 py-2 ">
            {children}
          </main>
          <Footer />
        </section>
      </div>
    );
  }
}

export default AppShell;

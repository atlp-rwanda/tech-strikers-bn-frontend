import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          background: "#061437",
          color: "white",
          paddingTop: "50px",
          paddingLeft: "20px",
          paddingBottom: "25px",
        }}
      >
        <section className="container">
          <div className="row">
            <main className="col-4">
              <h3>Barefoot Nomad</h3>
              <p style={{ color: "rgba(255,255,255,0.81)" }}>
                Simplifiying travellers
              </p>
              <div>
                <p style={{ color: "#5E6D77", paddingTop: "0px" }}>
                  KN 54 St,{" "}
                </p>
                <p style={{ color: "#5E6D77" }}>Kigali, Rwanda</p>
              </div>
            </main>
            <main className="col-4 mt-4 text-center">
              <p>Accomodation</p>
              <p>Most Visited place</p>
            </main>
            <main className="col-4 text-center">
              <h4>Contact us</h4>
              <p className="text-center">Email: strikers668@gmail.com</p>
            </main>
          </div>
          <section className="text-center" style={{ color: "#BCBCBC" }}>
            &copy; {new Date().getUTCFullYear()} Barefoot Nomad By{" "}
            <span style={{ color: "#0085FF" }}>TeckStrickers</span>
          </section>
        </section>
      </footer>
    );
  }
}

export default Footer;

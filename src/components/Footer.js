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
                Simplifying employee travels
              </p>
              <div>
                <p style={{ color: "#5E6D77", marginBottom: "0px" }}>
                  KN 54 St,{" "}
                </p>
                <p style={{ color: "#5E6D77" }}>Kigali, Rwanda</p>
              </div>
            </main>
            <main className="col-3 contactMain">
              <p>Tel: + 250 788 54 4534</p>
              <p>Email: strikers688@gmail.com</p>
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

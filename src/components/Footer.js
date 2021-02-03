import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer style={{ background: "#061437", color: "white" }}>
        <section className="container">
          <div className="row">
            <main className="col-6">
              <h3>Barefoot Nomad</h3>
              <p>Simplifiying travellers</p>
            </main>

            <main className="col-6">
              <h5>Contact us</h5>
              <p>Email: strikers668@gmail.com </p>
            </main>
          </div>
          <section className="text-center">
            &copy; {new Date().getUTCFullYear()} Barefoot Nomad By TeckStrickers
          </section>
        </section>
      </footer>
    );
  }
}

export default Footer;

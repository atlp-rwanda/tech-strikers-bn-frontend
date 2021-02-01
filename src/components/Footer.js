import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer style={{ background: "#061437", color: "white" }}>
        <section className="container">
          <div className="row">
            <main className="col-4">
              <h3>Barefoot Nomad</h3>
              <p>Simplifiying travellers</p>
            </main>
            <main className="col-4">
              <h3>Barefoot Nomad</h3>
              <p>Simplifiying travellers</p>
            </main>
            <main className="col-4">
              <p>Simplifiying travellers</p>
              <p>Simplifiying travellers</p>
              <p>Simplifiying travellers</p>
            </main>
          </div>
          <section>{new Date().getUTCFullYear()} &copy; TeckStrickers </section>
        </section>
      </footer>
    );
  }
}

export default Footer;

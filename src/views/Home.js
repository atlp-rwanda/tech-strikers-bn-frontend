import React, { Component } from "react";
import defaultA from "../../assets/1.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <img
            src={defaultA}
            className="col-12"
            style={{ maxHeight: "380px" }}
            alt
          />
        </section>
        <div style={{ backgroundColor: "#061437" }} className="container">
          <div className="row align-items-center" style={{ marginTop: "10" }}>
            <div className="col">
              <p>Where do you want to go</p>
            </div>
            <div className="col">
              <button type="button" className="btn btn-light">
                Primary
              </button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-light">
                Primary
              </button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-light">
                Primary
              </button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-light">
                Primary
              </button>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <h2>Most Visited Places</h2>
            <div className="row">
              <figure className="col-sm">
                <img src={defaultA} className="col-sm img-fluid" />
                <figcaption>
                  <i>no</i>
                </figcaption>
              </figure>

              <div className="col-4 " style={{ maxHeight: "380px" }}>
                <figure>
                  <img src={defaultA} className="col-sm img-fluid" />
                  <figcaption>
                    <i>no</i>
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm">
                <figure>
                  <img src={defaultA} className="col-sm img-fluid" />
                  <figcaption>
                    <i>no</i>
                  </figcaption>
                </figure>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={defaultA}
                  className="card-img-top img-fluid"
                  alt="hero"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

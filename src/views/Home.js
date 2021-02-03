import React, { Component } from "react";
import fontImage from "../../assets/2.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import Button from "../components/Button";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section>
          <img
            src={fontImage}
            className="col-12"
            style={{ maxHeight: "380px" }}
            alt
          />
        </section>

        <div
          style={{ backgroundColor: "#061437" }}
          className="d-flex flex-row bd-highlight justify-content-center mb-3"
        >
          <div className="text-white  mx-auto bd-highlight">
            <p className="p-3">Where do you want to go?</p>
          </div>
          <div className="p-2  mx-auto bd-highlight">
            <Button
              className="text-white"
              variant="outline-dark"
              text="Destination"
            />
          </div>
          <div className="p-2  mx-auto bd-highlight">
            <Button
              className="w-100 d-inline-block text-white"
              variant="outline-dark"
              text="Date"
              size="29"
            />
          </div>
          <div className="p-2  mx-auto bd-highlight">
            <Button
              className="text-white"
              variant="outline-dark"
              text="Travel Type"
            />
          </div>
          <div className="p-2  mx-auto bd-highlight">
            <Button className="text-white" variant="danger" text="Search" />
          </div>
        </div>

        <section>
          <div className="container">
            <h2 className="text-center">Most Visited Places</h2>
            <div className="row">
              <div className="col-4">
                <Card>
                  <img src={fontImage} className="card-img-top " alt="hero" />
                  <CardContent title="Paris" body="calculated" />
                </Card>
              </div>
              <div className="col-4">
                <Card>
                  <img src={fontImage} className="card-img-top " alt="hero" />
                  <CardContent title="Paris" body="calculated" />
                </Card>
              </div>
              <div className="col-4">
                <Card>
                  <img src={fontImage} className="card-img-top " alt="hero" />
                  <CardContent title="Paris" body="calculated" />
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Home;

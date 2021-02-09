import React, { Component } from "react";
import frontImage from "../assets/image/kglTopPic.jpg";
import daresImg from "../assets/image/darEs-Tz.jpg";
import kglImage from "../assets/image/kigaliImg.jpg";
import starIcon from "../assets/image/star-icon.png";
import locationIcon from "../assets/image/locationIcon.png";
import nairobiPic from "../assets/image/nairobiPic.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section>
          <img
            src={frontImage}
            className="col-12"
            style={{ maxHeight: "400px" }}
            alt=""
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

        <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="container">
            <h2 className="text-center">Most Visited Places</h2>
            <div className="row">
              <div className="col-4">
                <Card>
                  <img src={daresImg} className="card-img-top " alt="hero" />
                  <div className="cardContent">
                    Dar-es-Salam,
                    <div>
                      <img src={starIcon} className="starIcon" />
                      <img src={starIcon} className="starIcon" />
                      <img src={starIcon} className="starIcon" />
                      <img src={starIcon} className="starIcon" />
                    </div>
                    <div style={{ paddingTop: "15px" }}>
                      <img
                        src={locationIcon}
                        className="starIcon locationIcon"
                      />
                      Tanzania
                    </div>
                  </div>
                </Card>
              </div>

              <div className="col-4">
                <Card>
                  <img src={kglImage} className="card-img-top " alt="hero" />
                  <div className="cardContent">
                    Kigali,
                    <div>
                      <img src={starIcon} className="starIcon" />
                      <img src={starIcon} className="starIcon" />
                      <img src={starIcon} className="starIcon" />
                      <img src={starIcon} className="starIcon" />
                    </div>
                    <div style={{ paddingTop: "15px" }}>
                      <img
                        src={locationIcon}
                        className="starIcon locationIcon"
                      />
                      Rwanda
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-4">
                <Card>
                  <img src={nairobiPic} className="card-img-top " alt="hero" />
                  <div className="cardContent">
                    Nairobi,
                    <div>
                      <img src={starIcon} className="starIcon" />
                      <img src={starIcon} className="starIcon" />
                      <img src={starIcon} className="starIcon" />
                      <img src={starIcon} className="starIcon" />
                    </div>
                    <div style={{ paddingTop: "15px" }}>
                      <img
                        src={locationIcon}
                        className="starIcon locationIcon"
                      />
                      Kenya
                    </div>
                  </div>
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

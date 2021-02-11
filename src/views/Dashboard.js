import React, { Component } from "react";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import fontImage from "../assets/image/kigaliImg.jpg";

class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ml-5">
          <div className="row">
            <div className="col-4">
              <Card>
                <img src={fontImage} className="card-img-top" />
                <CardContent title="The place you visited most" text="Kigali" />
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;

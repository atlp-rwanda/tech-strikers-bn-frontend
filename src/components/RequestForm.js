import React, { Component } from "react";
import axios from "axios";
import { validator } from "../validations/trip.details.validate";
import Home from "../views/Home";
class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departureDate: "",
      returnDate: "",
      originId: "",
      destinationId: "",
      reason: "",
      locations,
      isOneWayChecked: false,
      isRoundChecked: true,
    };
    const locations = [];
    this.handleChange = this.handleChange.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.showMe = this.showMe.bind(this);
    this.toggleOneWayCheckbox = this.toggleOneWayCheckbox.bind(this);
    this.loc = this.loc.bind(this);
    this.checkDate = this.checkDate.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  showMe() {
    var x = document.getElementById("returnDate");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("oneWayCheckbox").checked = false;
    } else {
      x.style.display = "none";
    }
  }
  toggleOneWayCheckbox() {
    document.getElementById("returnDate").style.display = "none";
    document.getElementById("returnCheckbox").checked = false;
  }
  sendRequest(e) {
    e.preventDefault();
    const oneWay = document.getElementById("oneWayCheckbox").checked;
    const returnTrip = document.getElementById("returnCheckbox").checked;

    const tripDetails = ({
      departureDate: this.state.departureDate,
      returnDate: this.state.returnDate,
      originId: this.state.originId,
      destinationId: this.state.destinationId,
      reason: this.state.reason,
    } = this.state);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUsImVtYWlsIjoiZW1haWxlbWFpbEBnbWFpbC5jb20iLCJyb2xlSWQiOm51bGwsImlhdCI6MTYxMzk3ODU2MywiZXhwIjoxNjE0MDY0OTYzfQ.D2v4ihCzQgUms3mePi-VUX4UynNkiTPz629Vfo8NieI";
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "Application/json",
    };
    validator(tripDetails);
    let elem = document.getElementById("response");
    if (oneWay) {
      tripDetails.tripType = "one Way trip";
      axios
        .post(process.env.REACT_APP_BASE_URL + "/trip/one-way", tripDetails, {
          headers,
        })
        .then((res) => {
          elem.innerText = res.data.message;
          elem.style.backgroundColor = "green";
        })
        .catch((error) => {
          if (error.message) {
            elem.innerText = "Enter a valid data";
            elem.style.backgroundColor = "red";
            return;
          }
          return <Home />;
        });
    } else if (returnTrip) {
      tripDetails.tripType = "return trip";
      axios
        .post(process.env.REACT_APP_BASE_URL + "/return_trip", tripDetails, {
          headers,
        })
        .then((response) => {
          elem.innerText = response.data.message;
          elem.style.backgroundColor = "green";
        })
        .catch((error) => {
          if (error.message) {
            elem.innerText = "Enter a valid data";
            elem.style.backgroundColor = "red";
            return;
          }
          return <Home />;
        });
    } else {
      let el = document.getElementById("err-tripType");
      el.innerText = "Please select trip type!";
      el.style.color = "red";
    }
  }
  checkDate(data) {
    const currentDate = new Date(data);
    const today = new Date();
    if (
      currentDate.getDay < today.getDay ||
      currentDate.getMonth < today.getMonth ||
      currentDate.getFullYear < today.getFullYear
    ) {
      return false;
    }
  }
  loc = () => {
    axios
      .get("http://localhost:3000/api/v1/location/")
      .then((response) => {
        this.setState({ locations: response.data });

        response.data.map((values) => {
          const opt = document.createElement("option");
          opt.setAttribute("value", values.id);
          const text = document.createTextNode(
            values.country + "" + values.city
          );
          opt.appendChild(text);
          document.getElementById("inlineFormCustomSelect1").appendChild(opt);
        });
      })
      .catch((error) => {
        alert("Server responded with error, try again");
      });
  };
  render() {
    return (
      <div style={{ backgroundColor: "#F4F6F6" }} onLoad={this.loc}>
        <div className="card-header text-center">Trip request form</div>
        <div
          className="container  form-group"
          style={{ padding: "20px 5px 20px 30%" }}
        >
          <form onSubmit={this.sendRequest}>
            <p>
              <span id="response"></span>
            </p>
            <p>
              {" "}
              <span id="err-tripType"></span>
            </p>
            <div className="form-group col-md-3 form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="oneWayCheckbox"
                name="isOneWayChecked"
                checked={this.state.checked}
                onClick={this.toggleOneWayCheckbox}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                {" "}
                One way
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="returnCheckbox"
                name="isRoundChecked"
                checked={this.state.checked}
                onClick={this.showMe}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                {" "}
                Round
              </label>
            </div>

            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="returnDate">Departure date</label>
                <input
                  type="date"
                  className="form-control"
                  name="departureDate"
                  onChange={this.handleChange}
                  id="departureDate"
                />
                <span id="err-departureDate"></span>
              </div>
              <div id="returnDate" className="form-group col-md-3">
                <label htmlFor="returnDate">Return date</label>
                <input
                  type="date"
                  className="form-control"
                  name="returnDate"
                  value={this.state.returnDate}
                  onChange={this.handleChange}
                />
                <span id="err-returnDate"></span>
              </div>
            </div>
            <div className="form-row align-items-center">
              <div className="col-md-3 my-2">
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                  Current place
                </label>
                <select
                  selected
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  name="originId"
                  value={this.state.originId}
                  onChange={this.handleChange}
                ></select>
                <span id="err-origin"></span>
              </div>

              <div className="col-md-3 my-2">
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                  Desired destination ?
                </label>

                <select
                  selected
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect1"
                  name="destinationId"
                  value={this.state.destinationId}
                  onChange={this.handleChange}
                ></select>
                <span id="err-destination"></span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 form-row">
                <label htmlFor="reason" className="">
                  Reason for the trip:
                </label>

                <textarea
                  className="form-control"
                  name="reason"
                  value={this.state.reason}
                  onChange={this.handleChange}
                  aria-label="With textarea"
                  id="reason"
                  onClick={this.loc}
                ></textarea>
                <span id="err-reason"></span>
              </div>
            </div>
            <div className="form-row">
              <button type="submit" className="btn btn-primary col-md-6">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RequestForm;

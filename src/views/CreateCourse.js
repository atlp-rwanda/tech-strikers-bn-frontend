/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
// import M from "materialize-css";

const CreateCourse = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {});

  return (
    <div>
      <div className="signup">
        <div className="form-group">
          <h1> Register For A Visit</h1>
          <label htmlFor="drivingLicense">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
            id="fistName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="drivingLicense">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="drivingLicense"> Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="drivingLicense"> Type</label>
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            type="text"
            className="form-control"
            id="Type"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword">Status</label>
          <input
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            type="text"
            className="form-control"
            id="status"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => saveData()}
        >
          {" "}
          Register{" "}
        </button>
      </div>
    </div>
  );
};

export default CreateCourse;

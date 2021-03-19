import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "../components/Card";
import CardContent from "../components/CardContent";

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verify: "",
      alreadyVerified: "",
    };
    this.handleVerify = this.handleVerify.bind(this);
    this.handleAlreadyVerified = this.handleAlreadyVerified.bind(this);
  }

  handleVerify(message) {
    this.setState({ verify: message });
  }

  handleAlreadyVerified(error) {
    this.setState({ alreadyVerified: error });
  }

  async componentDidMount() {
    try {
      const {
        match: { params },
      } = this.props;
      const data = await axios.post(
        `${process.env.APP_URL}/api/v1/user/confirmation/${params.token}`
      );
      this.handleVerify(data.message);
      this.handleAlreadyVerified("");
    } catch (error) {
      const { data } = error.response;
      this.handleAlreadyVerified(data.error);
      this.handleVerify("");
    }
  }

  render() {
    const { verify, alreadyVerified } = this.state;
    return (
      <div className=" px-5 text-center mt-5 ml-5 d-flex align-self-center">
        {verify ? (
          <Card>
            <CardContent title={verify} />
          </Card>
        ) : null}
        {alreadyVerified ? (
          <Card>
            <CardContent
              title={alreadyVerified}
              body="Click The link below to return to homepage"
            />
            <Button variant="primary" className="txt-white">
              <Link to="/" className="text-white">
                {" "}
                REDIRECT TO HOME{" "}
              </Link>
            </Button>
          </Card>
        ) : null}
      </div>
    );
  }
}

export default Verify;

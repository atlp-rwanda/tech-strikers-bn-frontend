import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Buttons extends Component {
  render() {
    return (
      <>
        <Button className={this.props.className} variant={this.props.variant}>
          {this.props.text}
        </Button>{" "}
      </>
    );
  }
}

export default Buttons;

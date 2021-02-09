import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Buttons extends Component {
  render() {
    const { className, type, variant, text, disabled } = this.props;
    return (
      <>
        <Button
          className={className}
          type={type}
          variant={variant}
          disabled={disabled}
        >
          {text}
        </Button>{" "}
      </>
    );
  }
}

export default Buttons;

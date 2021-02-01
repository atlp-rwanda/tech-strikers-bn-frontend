import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ width: "18rem", margin: "20px 20px 20px 10px" }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;

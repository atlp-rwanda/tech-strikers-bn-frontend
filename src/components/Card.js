import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card shadow-lg mb-5 bg-blue rounded cardBox">
        {this.props.children}
      </div>
    );
  }
}

export default Card;

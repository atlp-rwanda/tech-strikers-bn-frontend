import React, { Component } from "react";

class Card extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="card shadow-lg mb-5 bg-blue rounded cardBox">
        {children}
      </div>
    );
  }
}

export default Card;

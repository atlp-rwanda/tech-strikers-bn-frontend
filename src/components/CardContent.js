import React, { Component } from "react";

class CardContent extends Component {
  render() {
    const { title, body } = this.props;
    return (
      <>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </>
    );
  }
}

export default CardContent;

import React, { Component } from "react";

class CardContent extends Component {
  render() {
    return (
      <>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.body}</p>
        </div>
      </>
    );
  }
}

export default CardContent;

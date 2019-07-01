import React, { Component } from "react";

class Film extends Component {
  render() {
    return (
      <div className="film">
        <h2>{this.props.name}</h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Film;
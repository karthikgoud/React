import React, { Component } from "react";

class Plays extends Component {
  render() {
    return (
      <div>
        <h1>JSX class here</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Plays;

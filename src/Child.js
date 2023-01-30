import React, { Component } from "react";

class Child extends Component {
  render() {
    const listColors = this.props.colors.map((color, index) => (
      <li key={index}>{color}</li>
    ));
    return (
      <div>
        <ul>{listColors}</ul>
        <h1>Child Components </h1>
        <h2>
          Hello Im {this.props.personalInfo.name}
          </h2>
          <h2> And im {this.props.personalInfo.age}</h2>
       
      </div>
    );
  }
}

export default Child;

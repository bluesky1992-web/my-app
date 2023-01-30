import React, { Component } from "react";
import "./App.css";
import Child from "./Child";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

class App extends Component {
  render() {
    const info = {
      name: "Ali",
      age: 20,
    };

    const arr = ['blue','red','green','yellow',]
    return (
      <div>
        <h1 className="app">Hello World</h1>
        <Child personalInfo={info}  colors = {arr}/>
        <ClassComponent  />
        <FunctionComponent />
      </div>
    );
  }
}

export default App;

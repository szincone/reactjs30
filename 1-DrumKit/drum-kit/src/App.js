import React, { Component } from "react";
import { Keys } from "./components/keys/Keys";
import { keyCodeObj } from "./data/keyCodeData.js";
import "./App.css";
class App extends Component {
  state = {
    keyCodeData: keyCodeObj,
  };
  render() {
    return (
      <div className="app-wrapper">
        <Keys keyData={this.state.keyCodeData} />
      </div>
    );
  }
}

export default App;

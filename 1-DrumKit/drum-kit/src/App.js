import React, { Component } from "react";
import { Keys } from "./components/keys/Keys";
import { keyCodeObj } from "./data/keyCodeData.js";

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

import React, { Component } from "react";
import { Keys } from "./components/keys/Keys";
import { keyCodeObj } from "./data/keyCodeData.js";

class App extends Component {
  state = {
    keyCodeData: keyCodeObj,
  };
  render() {
    console.log("KEYCODE DATA", this.state.keyCodeData);
    return (
      <div className="app-wrapper">
        <Keys />
      </div>
    );
  }
}

export default App;

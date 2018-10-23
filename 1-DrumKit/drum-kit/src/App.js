import React, { Component } from "react";
import { Keys } from "./components/keys/Keys.js";
import { Audio } from "./components/audio/Audio.js";
import { keyCodeObj } from "./data/keyCodeData.js";
import "./App.css";
class App extends Component {
  state = {
    keyCodeData: keyCodeObj,
  };

  // plays correct sound depending on key code
  playSoundHandler(event) {
    console.log("EVENT", event);
    // needed for audio
    // const audio = document.querySelector(`audio[datakey="${event.keyCode}"]`);
    // // neeeded for styles
    // const key = document.querySelector(`.key[datakey="${event.keyCode}"]`);
    // // prevent keys w/ no audio from being triggered
    // if (!audio) {
    //   // do nothing
    // }
    // // gets rid of delay between audio presses
    // audio.currentTime = 0;
    // // plays audio
    // audio.play();
    // // toggles playing class styles
    // key.classList.toggle("playing");
  }
  componentDidMount() {
    document.addEventListener("keydown", this.playSoundHandler, false);
  }
  // making sure to unmount eventlisteners to prevent potential errors
  componentWillUnmount() {
    document.removeEventListener("keydown", this.playSoundHandler, false);
  }
  render() {
    return (
      <div
        className="app-wrapper"
        onKeyDown={event => this.playSoundHandler(event)}
      >
        <Keys
          keyData={this.state.keyCodeData}
          playSoundHandler={this.playSoundHandler}
        />
        <Audio
          keyData={this.state.keyCodeData}
          playSoundHandler={this.playSoundHandler}
        />
      </div>
    );
  }
}

export default App;

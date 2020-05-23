import React, { Component } from 'react';
import './App.css';
import { Greet } from '../src/components/Greet';
import Welcome from "../src/components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" >This is children</Greet>
        <Greet name="Clark" />
        <Greet name="Diana" />
        <Welcome name="Bruce" />
        <Welcome name="Clark" />
        <Welcome name="Diana" >This is children</Welcome>
      </div>
    );
  }
}

export default App;

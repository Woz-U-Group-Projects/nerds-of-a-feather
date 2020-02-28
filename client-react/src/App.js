import React, { Component } from "react";
import Project from "./components/Project";
import "./App.css";
import User from './components/User';

class App extends Component {

  onSubmit = fields => {
    console.log("App comp got:", fields);
  }
  render() {
  return (
    <div className="App">
      <User onSubmit={fields => this.onSubmit(fields)}/>
    </div>
  );
}
}

export default App;

import React, { Component } from "react";
import "./App.css";
//import User from './components/User';
import Cars from './components/cars';
import 'bootstrap/dist/css/bootstrap.min.css';
import PicUploader from './components/ImageUploader';

class App extends Component {

  onSubmit = fields => {
    console.log("App comp got:", fields);
  }
  render() {
  return (
    <div className="App">
      <Cars />
    </div>
  );
}
}

export default App;

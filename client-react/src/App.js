import React, { Component } from "react";
import "./App.css";
import User from './components/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import PicUploader from './components/ImageUploader';

class App extends Component {

  onSubmit = fields => {
    console.log("App comp got:", fields);
  }
  render() {
  return (
    <div className="App">
     
      <User />
    </div>
  );
}
}

export default App;

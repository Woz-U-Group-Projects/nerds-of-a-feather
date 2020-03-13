import React, { Component } from 'react';
import User from '../components/User';


class SignUp extends Component {

  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({ fields });
  };

  render() {
  return(
    <div>
      <h2 className="nav-buttons">Sign Up</h2>
      <User onSubmit={fields => this.onSubmit(fields)}/>
      {/*<p>{JSON.stringify(this.state.fields, null, 2)}</p>*/}
    </div>
  )
  }
};

export default SignUp;
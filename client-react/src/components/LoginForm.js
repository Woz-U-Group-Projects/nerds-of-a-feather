import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
    state = {
        userName: "",
        password: ""  
    }

    getLoginForm(){
      axios.get('http://localhost:3001/cars').then(res => {
          const LoginForm = res.data;
          this.setState({ LoginForm });
        });
           
      }  

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            userName: "",
            password: ""
        });
    }

    render () {
        return (
            <form>
                <div>
                <input name="userName"
                placeholder="User Name" 
                value={this.state.userName}   
                onChange={e => this.change(e)} 
                />
                </div>
                <br/>
                <div>
                <input name="password"
                type="password"
                placeholder="Password" 
                value={this.state.password}   
                onChange={e => this.change(e)} 
                />
                </div>
                <br/>
                <div>
                <button onClick={(e) => this.onSubmit(e)}>Submit</button>
                </div>
            </form>

        )
    }
}

export default LoginForm;
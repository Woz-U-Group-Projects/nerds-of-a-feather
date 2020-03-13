import React from 'react';
import Axios from 'axios';

class User extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        email: "",
    };

    /*handleChange = event => {
        this.setState({ name: event.target.value });
    }*/

    handleSubmit = event => {
        event.preventDefault();
    

    const newUser = {
        firstName: this.state.name,
        lastName: this.state.name,
        userName: this.state.name,
        password: this.state.name,
        email: this.state.name
    }

    Axios.post(`http:localhost3000/Signup`, { newUser })
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
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
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
        });
    }

    render () {
        return (
            <form>
                <input name="firstName"
                placeholder="First Name" 
                value={this.state.firstName}   
                onChange={e => this.change(e)} 
                />
                <br/>
                <input name="lastName"
                placeholder="Last Name" 
                value={this.state.lastName}   
                onChange={e => this.change(e)} 
                />
                <br/>
                <input name="userName"
                placeholder="User Name" 
                value={this.state.userName}   
                onChange={e => this.change(e)} 
                />
                <br/>
                <input name="password"
                type="password"
                placeholder="Password" 
                value={this.state.password}   
                onChange={e => this.change(e)} 
                />
                <br/>
                <input name="email"
                placeholder="Email" 
                value={this.state.email}   
                onChange={e => this.change(e)} 
                />
                <br/>
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>

        )
    }
}

export default User;

import React from 'react';
import axios from 'axios';

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            email: ''
        }
    }

    getUser() {
        axios.get('http://localhost:3001/users').then(res => {
            const user = res.data;
            this.setState({ user });
        });
    }

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

    submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:3001/users/create', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email
    })
        .then(res => {
            this.setState({ addUser: ''});
        })
    }

    render () {
        const { firstName, lastName, userName, password, email } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <input name="firstName"
                placeholder="First Name" 
                value={firstName}   
                onChange={e => this.change(e)} 
                />
                <br/>
                <div>
                <input name="lastName"
                placeholder="Last Name" 
                value={lastName}   
                onChange={e => this.change(e)} 
                />
                </div>
                <br/>
                <div>
                <input name="userName"
                placeholder="User Name" 
                value={userName}   
                onChange={e => this.change(e)} 
                />
                </div>
                <br/>
                <div>
                <input name="password"
                type="password"
                placeholder="Password" 
                value={password}   
                onChange={e => this.change(e)} 
                />
                </div>
                <br/>
                <div>
                <input name="email"
                placeholder="Email" 
                value={email}   
                onChange={e => this.change(e)} 
                />
                </div>
                <br/>
                <button type='submit'>Submit</button>
            </form>

        )
    }
}

export default User;

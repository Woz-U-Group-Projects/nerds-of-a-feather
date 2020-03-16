import React from 'react';
import axios from 'axios';

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            FirstName: '',
            LastName: '',
            UserName: '',
            Password: '',
            Email: ''
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

    // handleSubmit = event => {
    //     event.preventDefault();
    

    // const newUser = {
    //     firstName: this.state.name,
    //     lastName: this.state.name,
    //     userName: this.state.name,
    //     password: this.state.name,
    //     email: this.state.name
    // }



    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitHandler = e => {
        //e.preventDefault()
        axios.post('http://localhost:3001/users/create', {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            UserName: this.state.UserName,
            Password: this.state.Password,
            Email: this.state.Email
    })
        .then(res => {
            this.setState({ addUser: ''});
        })
    }


    render () {
        const { FirstName, LastName, UserName, Password, Email } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                <input name="FirstName"
                placeholder="First Name" 
                value={FirstName}   
                onChange={e => this.change(e)} 
                />
                </div>
                <br/>
                <div>
                <input name="LastName"
                placeholder="Last Name" 
                value={LastName}   
                onChange={e => this.change(e)} 
                />
                </div>
                <br/>
                <div>
                <input name="UserName"
                placeholder="User Name" 
                value={UserName}   
                onChange={e => this.change(e)} 
                />
                </div>
                <br/>
                <div>
                <input name="Password"
                type="Password"
                placeholder="Password" 
                value={Password}   
                onChange={e => this.change(e)} 
                />
                </div>
                <br/>
                <div>
                <input name="Email"
                placeholder="Email" 
                value={Email}   
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

import React, { Component } from 'react';
import axios from 'axios';
//import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

/*export default class Inventory1 extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        render() {
        return (
            <div>
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand alt="Car Image" style={{color: '#fff', background: 'url(https://daf3a3aee78adeea1188-bcac9dee8d49f61c0e6a8caf9caf08bb.ssl.cf1.rackcdn.com/2C3CDXHG9JH174159/bdf712ca31e8e0fab867e303d2fa60e6.jpg'}}>Sample</CardTitle>
    <CardText>
        <SpecList items={this.state.items} />
    </CardText>
    <CardActions border>
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.text} ref={(a) => this._inputElement = a} placeholder="Enter Spec"/>
        <Button colored>Add {this.state.items.length + 1}</Button>
        </form>
    </CardActions>
</Card>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class SpecList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}*/

export default class CarCard extends Component {
    state = {
        carData: []
    };

    fetchCarData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    carData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchCarData();
    }

render() {
    console.log(this.state.carData);
    if (this.state.carData.length === 0) {
        return <div>Failed to fetch data from server</div>;
    }
    const cars = this.state.carData.map(car => (
        <div key={car.name}>
            <em>{car.name}</em>
        </div>
    ));
    return (
        <div>
            {cars}
        </div>
    )
}
}

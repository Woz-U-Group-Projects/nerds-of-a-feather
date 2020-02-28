import React, { Component } from 'react';
import axios from 'axios';

class Cars extends Component {
    constructor(props) {
        super(props)

        this.state = {
            year: '',
            make: '',
            model: '',
            mileage: '',
            vin: '',
            doors: '',
            color: '',
            price: ''
        }
    }

    handleYearChange = (event) => {
        this.setState({
            year: event.target.value
        })
    }

    handleMakeChange = (event) => {
        this.setState({
            make: event.target.value
        })
    }

    handleModelChange = (event) => {
        this.setState({
            model: event.target.value
        })
    }

    handleMileageChange = (event) => {
        this.setState({
            mileage: event.target.value
        })
    }

    handleVinChange = (event) => {
        this.setState({
            vin: event.target.value
        })
    }

    handleDoorsChange = (event) => {
        this.setState({
            doors: event.target.value
        })
    }

    handleColorChange = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    
    handleSubmit = event => {
        this.setState(`
        ${this.state.year} 
        ${this.state.make}
        ${this.state.model}
        ${this.state.mileage}
        ${this.state.vin}
        ${this.state.doors}
        ${this.state.color}
        ${this.state.price}
        `)
        event.preventDefault()
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Year: </label>
                    <input type='number' value={this.state.year} onChange={this.handleYearChange}/>
                    <br />
                </div>
                <div>
                    <label>Make: </label>
                    <input type='text' value={this.state.make} onChange={this.handleMakeChange}/>
                    <br />
                </div>
                <div>
                    <label>Model: </label>
                    <input type='text' value={this.state.model} onChange={this.handleModelChange}/>
                    <br />
                </div>
                <div>
                    <label>Mileage: </label>
                    <input type='number' value={this.state.mileage} onChange={this.handleMileageChange}/>
                    <br />
                </div>
                <div>
                    <label>Vin: </label>
                    <input type='text' value={this.state.vin} onChange={this.handleVinChange}/>
                    <br />
                </div>
                <div>
                    <label>Number Of Doors: </label>
                    <input type='number' value={this.state.doors} onChange={this.handleDoorsChange}/>
                    <br />
                </div>
                <div>
                    <label>Color: </label>
                    <input type='text' value={this.state.color} onChange={this.handleColorChange}/>
                    <br />
                </div>
                <div>
                    <label>Price: </label>
                    <input type='number' value={this.state.price} onChange={this.handlePriceChange}/>
                    <br />
                </div>
                <button type='submit'>Submit</button>
                
            </form>
         );
    }
}
 
export default Cars;
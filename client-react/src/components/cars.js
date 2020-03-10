import React, { Component } from 'react';
import axios from 'axios';

class Cars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: '',
            make: '',
            model: '',
            mileage: '',
            vin: '',
            doors: '',
            color: '',
            price: ''
        };
        this.vehicleName = React.createRef();
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let url = "http://localhost:3001/vehicles/cars";
        axios.get(url)
        .then(res => {
            console.log(res);

            this.setState({
                year: res.data,
                make: res.data,
                model: res.data,
                mileage: res.data,
                vin: res.data,
                doors: res.data,
                color: res.data,
                price: res.data
            });
        });
    };
    

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
            event.preventDefault();

            const newVehicle = {
                year: this.state.year,
                make: this.state.make,
                model: this.state.model,
                mileage: this.state.mileage,
                vin: this.state.vin,
                doors: this.state.doors,
                color: this.state.color,
                price: this.state.price
            }
            axios.post(`http://localhost:3001/vehicles/cars`, newVehicle)
            .then(res => {
                this.getData();
                this.vehicleName.current.value = '';
            });
        };

    render() { 
      
        return (
            
            <form onSubmit={this.handleSubmit}>
                <div>
                <h1>Awesome Cars!</h1>
                    <label>Year: </label>
                    <input ref={this.vehicleName} type='number' value={this.state.year} onChange={this.handleYearChange}/>
                    <br />
                </div>
                <div>
                    <label>Make: </label>
                    <input ref={this.vehicleName} type='text' value={this.state.make} onChange={this.handleMakeChange}/>
                    <br />
                </div>
                <div>
                    <label>Model: </label>
                    <input ref={this.vehicleName} type='text' value={this.state.model} onChange={this.handleModelChange}/>
                    <br />
                </div>
                <div>
                    <label>Mileage: </label>
                    <input ref={this.vehicleName} type='number' value={this.state.mileage} onChange={this.handleMileageChange}/>
                    <br />
                </div>
                <div>
                    <label>Vin: </label>
                    <input ref={this.vehicleName} type='text' value={this.state.vin} onChange={this.handleVinChange}/>
                    <br />
                </div>
                <div>
                    <label>Number Of Doors: </label>
                    <input ref={this.vehicleName} type='number' value={this.state.doors} onChange={this.handleDoorsChange}/>
                    <br />
                </div>
                <div>
                    <label>Color: </label>
                    <input ref={this.vehicleName} type='text' value={this.state.color} onChange={this.handleColorChange}/>
                    <br />
                </div>
                <div>
                    <label>Price: </label>
                    <input ref={this.vehicleName} type='number' value={this.state.price} onChange={this.handlePriceChange}/>
                    <br />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                
            </form>
            
         );
         
    }
}
 
export default Cars;

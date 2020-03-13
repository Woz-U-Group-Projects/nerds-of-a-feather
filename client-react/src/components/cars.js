import React, { Component } from 'react';
import axios from 'axios';

class Cars extends Component {
    constructor(props) {
        super(props)

        this.state = {
            year:'',
            make:'',
            model:'',
            mileage:'',
            vin:'',
            color:'',
            doors:'',
            price:''
        }
    }

    getCar() {
        axios.get('http://localhost:3001/cars').then(res => {
            const car = res.data;
            this.setState({ car });
        });
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:3001/cars', {
            year: this.year.current.value,
            make: this.make.current.value,
            model: this.model.current.value,
            mileage: this.mileage.current.value,
            vin: this.vin.current.value,
            color: this.color.current.value,
            doors: this.doors.current.value,
            price: this.price.current.value
    })
        .then(res => {
            this.setState({ addCar: ''});
            this.getCar();
        })
    }

    render() {
        const {year, make, model, mileage, vin, color, doors, price} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <input placeholder="Year" type="number" name="year" value={year} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <input placeholder="Make" type="text" name="make" value={make} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <input placeholder="Model" type="text" name="model" value={model} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <input placeholder="Mileage" type="number" name="mileage" value={mileage} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <input placeholder="Vin" type="text" name="vin" value={vin} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <input placeholder="Color" type="text" name="color" value={color} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <input placeholder="# of doors" type="number" name="doors" value={doors} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <input placeholder="Price" type="number" name="price" value={price} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Cars

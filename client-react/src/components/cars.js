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
                    <label>Year: </label>
                    <input type="number" name="year" value={year} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <label>Make: </label>
                    <input type="text" name="make" value={make} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <label>Model: </label>
                    <input type="text" name="model" value={model} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <label>Mileage: </label>
                    <input type="number" name="mileage" value={mileage} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <label>Vin: </label>
                    <input type="text" name="vin" value={vin} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <label>Color: </label>
                    <input type="text" name="color" value={color} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <label>Number Of Doors: </label>
                    <input type="number" name="doors" value={doors} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <div>
                    <label>Price: </label>
                    <input type="number" name="price" value={price} onChange={this.changeHandler}/>
                    </div>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Cars
import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

export default class Inventory1 extends Component {
        render() {
        return (
            <div>
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(https://daf3a3aee78adeea1188-bcac9dee8d49f61c0e6a8caf9caf08bb.ssl.cf1.rackcdn.com/2C3CDXHG9JH174159/bdf712ca31e8e0fab867e303d2fa60e6.jpg'}}>Sample</CardTitle>
    <CardText>
        Car Specs
    </CardText>
    <CardActions border>
        <Button colored>Upload Image</Button>
    </CardActions>
</Card>
            </div>
        )
    }
}
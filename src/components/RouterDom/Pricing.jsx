import React, { Component } from 'react';


export default class Home extends Component {
    render() {
        let pricingBox = {
            padding: '20px',
            margin: '30px',
            textAlign: 'center'
        }
        return (
            <div style={pricingBox}>
                <h1>This is React Pricing Page</h1>
            </div>
        );
    }
}


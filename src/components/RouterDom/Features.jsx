import React, { Component } from 'react';


export default class Home extends Component {
    render() {
        let featureBox = {
            padding: '20px',
            margin: '30px',
            textAlign: 'center'
        }
        return (
            <div style={featureBox}>
                <h1>This is React Features Page</h1>
            </div>
        );
    }
}


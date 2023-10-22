import React, { Component } from 'react';


export default class Home extends Component {
    render() {
        let homeBox = {
            textAlign: 'center',
            padding: '20px',


        }
        return (
            <div style={homeBox}>
                <h1>This is React Home Page</h1>
            </div>
        );
    }
}


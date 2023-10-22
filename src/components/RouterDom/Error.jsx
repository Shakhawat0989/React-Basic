import React, { Component } from 'react';

export default class Error extends Component {
    render() {
        let errBox = {
            padding: '20px',
            margin: '30px',
            textAlign: 'center'
        }
        return (
            <div style={errBox}>
                <h1>Sorry :( 404 This is Error Page</h1>
            </div>
        );
    }
}



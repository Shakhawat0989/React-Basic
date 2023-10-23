import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navber extends Component {
    render() {
        let navBox = {
            padding: '20px',
            margin: '30px',
            textAlign: 'center'
        }
        return (
            <div style={navBox}>

                <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/features">Features</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/blog">Blog</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/pricing">Pricing</Link>

            </div>
        );
    }
}


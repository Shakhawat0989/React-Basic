import React, { Component } from 'react';

class famous extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fruits: [
                { name: 'apple', weight: '40gm' },
                { name: 'Mango', weight: '10gm' },
                { name: 'Orange', weight: '30gm' },
                { name: 'Banana', weight: '20gm' },
            ]
        }
    }
    clickHandler = () => {
        this.setState({
            fruits: [
                { name: 'Mango', weight: '20gm' },
                { name: 'Banana', weight: '30gm' },
                { name: 'Orange', weight: '10gm' },
                { name: 'Apple', weight: '40gm' },
            ]
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Change Here</button>
                <h2>Fruit Name is {this.state.fruits[0].name}</h2>
                <h2>Fruit Name is {this.state.fruits[1].name}</h2>
                <h2>Fruit Name is {this.state.fruits[2].name}</h2>
                <h2>Fruit Name is {this.state.fruits[3].name}</h2>
            </div>
        )
    }
}

export default famous;
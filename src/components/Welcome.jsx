import React, { Component } from 'react';

class good extends Component{
    constructor(props){
        super(props);
        this.state={
            fruits:[
                { name: 'apple',weight:'40gm'},
                { name: 'Mango',weight:'10gm'},
                { name: 'Orange',weight:'30gm'},
                { name: 'Banana',weight:'20gm'},
            ]
        }
    }


    render(){
        return(
            <div>
                <h1>Fruit Name is { this.state.fruits[3].name } and weight is {this.state.fruits[3].weight}</h1>
                <h1>Fruit Name is { this.state.fruits[2].name } and weight is {this.state.fruits[2].weight}</h1>
                <h1>Fruit Name is { this.state.fruits[1].name } and weight is {this.state.fruits[1].weight}</h1>
                <h1>Fruit Name is { this.state.fruits[0].name } and weight is {this.state.fruits[0].weight}</h1>
            </div>
        )
    }
}

export default good;
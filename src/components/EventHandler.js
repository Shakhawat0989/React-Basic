import React, { Component } from 'react';

class clickMe extends Component{

    clickHandler = ()=>{
        console.log('Already Clicked');
        alert('Clicked');
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default clickMe;
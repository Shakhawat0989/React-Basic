import React, {Component} from 'react';

class check extends Component {
    constructor(props){
        super(props);
        this.state={
               name:'Sabbir'
            
        }
    }

    changeName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.changeName} value={this.state.name} />
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}

export default check;
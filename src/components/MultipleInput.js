

import React,{Component} from 'react';

class MultipleInput extends Component {
    state={
        username:"",
        phonenumber:"",
        email:"",
        city:"",
    }
    


    changedata=(event)=>{
        let val = event.target.name; //username, phonenumber, email, city
        let myvalue= event.target.value; //getting all value

        this.setState({[val]:myvalue});
    }

    render(){
        return (
            <div>
                <h2>{this.state.username}</h2>
                <h2>{this.state.phonenumber}</h2>
                <h2>{this.state.email}</h2>
                <h2>{this.state.city}</h2>
                <from>
                    <div>
                        <input type="text" name="username" onChange={this.changedata}/><br />
                        <input type="text" name="phonenumber"  onChange={this.changedata}/><br />
                        <input type="text" name="email"  onChange={this.changedata}/><br />
                        <input type="text" name="city"  onChange={this.changedata}/><br />
                        <button type="submit">Submit</button>
                    </div>
                    
                </from>

            </div>
        )
    }
}
export default MultipleInput;
import React,{Component} from 'react';

export default class Look extends Component {

    state={
        email:"",
        details:""
    }


    render(){
        return (
            <div>
                <h2>Login Area</h2>

                <div>
                    <form action="">
                        <label>User Email</label><br />
                        <input type="text" name="email" /><br />
                        <label>Details</label><br />
                        <input type="text" name="details" onChange={(event)=>{this.setState({details:event.target.value})}} /><br />

                        <h6>{this.state.details}</h6>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
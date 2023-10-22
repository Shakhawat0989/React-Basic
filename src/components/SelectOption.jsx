import React,{Component} from 'react';

export default class Option extends Component {

    state={
        age:"",
     
    }


    render(){
        return (
            <div>
                <h2>Select Age</h2>

                <div>
                    <form action="">
                        <label>Your age</label><br />
                        <select onChange ={(event)=>{this.setState({age:event.target.value})}} name="age">
                            <option value="" selected disabled>Select your Age</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </select>

                        <h6>My Age : {this.state.age}</h6>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
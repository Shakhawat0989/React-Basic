import React,{Component} from 'react';

export default class List extends Component{
    render(){

        const names =[
            {name:'Sabbir', age:'25'},
            {name:'Shakhawat', age:'26'},
            {name:'Hossain', age:'27'}
        ];
        const items = names.map((item, idx)=>{                                  //item = string and idx= index
            return <li key={idx}>Name: {item.name}, Age: {item.age}</li>
        });
        return(
            <div>
                <h2>Students List</h2>
                <div>
                    {items}
                </div>
            </div>
        )
    }
} 
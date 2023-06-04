import { Component } from "react";
import uniqid from 'uniqid';
export default class PersonalOverview extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {inputs} = this.props;
        return(
           <ul>
            {inputs.personal.map((input)=>{
                return <li key={uniqid()}>{input}</li>
            })}
           </ul>
        );
    }

}
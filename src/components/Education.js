import { Component } from "react";
import Field from "./Field";

export default class Education extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {onChange, onSubmit} = this.props;
        return(
            <section>
                <Field
                header = "Education" 
                 placeholder1="School Name"
          placeholder2="Major"
          placeholder3="Start Date"
          placeholder4="End Date"
          placeholder5 = "Details"
           className1="school-name"
          className2="major"
          className3="start-date"
          className4="end-date"
          className5="education-detail"
         
          onChange={onChange}
          onSubmit={onSubmit}
          ></Field>
            </section>
        );
    }


}
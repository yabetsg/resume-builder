import { Component } from "react";
import Field from "./Field";

export default class Experience extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {onChange, onSubmit} = this.props;
        return(
            <section>
                <Field
                header = "Work Experience" 
                 placeholder1="Company Name"
          placeholder2="Position"
          placeholder3="Date From"
          placeholder4="Date Until"
          placeholder5 = "Details"
          className1="company-name"
          className2="position"
          className3="date-from"
          className4="date-until"
          className5="details"
          onChange={onChange}
          onSubmit={onSubmit}
          ></Field>
            </section>
        );
    }


}
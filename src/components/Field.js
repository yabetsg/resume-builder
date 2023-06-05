import { Component } from "react";

export default class Field extends Component{

    constructor(props){
        super(props);
     
    }

  
    render(){
        const {onChange, onSubmit,header, value1, value2, value3, value4, value5, placeholder1,placeholder2,placeholder3, placeholder4 , placeholder5, className1, className2, className3, className4, className5} = this.props;
        return(
           <section>
                <form onSubmit={onSubmit}>
                <header> {header}</header>
                <input placeholder={placeholder1}className={className1} onChange={onChange} value={value1} ></input>
                <input placeholder={placeholder2} className={className2}  onChange={onChange} value={value2}></input>
                <input placeholder={placeholder3} className={className3} onChange={onChange} value = {value3}></input>
                <input placeholder={placeholder4} className={className4} onChange={onChange} value = {value4}></input>
                <input placeholder={placeholder5} className={className5} onChange={onChange} value = {value5}></input>
                <button type="submit">Add</button>
                </form>
           </section>
        );
    }

}
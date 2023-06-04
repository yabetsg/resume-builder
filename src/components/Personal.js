import React, { Component } from "react";

import uniqid from "uniqid";

export default class Personal extends Component{

    constructor(props){
        super(props);
     
    }

  
    render(){
        const {onChange, onSubmit} = this.props;
        return(
           <section>
                <form onSubmit={onSubmit}>
                <header> Personal Details</header>
                <input placeholder="Name" className="name" onChange={onChange}></input>
                <input placeholder="Email" className="email"  onChange={onChange}></input>
                <input placeholder="Phone Number" className="phone"  onChange={onChange}></input>
                <button type="submit">Add</button>
                </form>
           </section>
        );
    }
}
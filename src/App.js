import logo from './logo.svg';
import './App.css';
import  Personal from './components/Personal';
import React, { Component } from "react";
import PersonalOverview from './components/PersonalOverview';
import uniqid from 'uniqid';
 export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            input : {name:'',email:'',phone:''},
            inputs:{
                personal:[]
            } 
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
      const {name,email,phone} = this.state.input;
     switch(e.target.className){
      case 'name':
         this.setState({
           input:{name:e.target.value,email:email,phone:phone}
        });
      
      break;

      case 'email':
        this.setState({
          input:{name:name,email:e.target.value,phone:phone}
       });
      
      break;
      
      case 'phone':
        this.setState({
          input:{name:name,email:email,phone:e.target.value}
       });
       break;
      default:{
        console.log('?');
      }
     }
       
      
    }
    onSubmit(e){
        e.preventDefault();
       
        this.setState({
            inputs:{
                personal:this.state.inputs.personal.concat(this.state.input.name,this.state.input.email,this.state.input.phone)
            },
            input:{
              id:uniqid()
            } 
            
        })
     console.log(this.state);
    }
    render(){
        return(
           <>
           <Personal onChange={this.onChange} onSubmit={this.onSubmit}></Personal>
           <PersonalOverview inputs={this.state.inputs}></PersonalOverview>
           </>
            
        );
    }
}

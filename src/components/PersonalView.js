import { Component } from "react";

export default class PersonalView extends Component{
    render(){
        const {className1,id, className2, className3, className4 , className5,value0,value1,value2,value3,value4,value5, onChange1, onChange2,onChange3,onChange4,onChange5} = this.props;
        return(
            <>
            <div className="personal-container">
            <div className="gap" >
                <div className="view-name">
            <p id={id}  className={className1} onChange = {onChange1} value={value0}>{value0}</p>
           
            </div> 
            <div className="email-phone-title"> 
            <p id={id} className={className2}  onChange = {onChange2} value={value1}>{value1}</p>
                <p id={id} className={className3}  onChange = {onChange3} value={value2}>{value2}</p>
                <p id={id} className={className4}  onChange = {onChange4} value={value3}>{value3}</p>
            </div>
            </div>
           
            <p id={id} className={className5}  onChange = {onChange5} value={value4}>{value4}</p>
           
            </div>
            </>
        );
    }
}
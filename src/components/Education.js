import { Component } from "react";
import Field from "./Field";
import uniqid from 'uniqid';
import React from "react";
export default class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onChange,onSubmit, value1, value2, value3, value4, value5, id, addButtonEvent, removeButtonEvent, className1, className2, className3, className4, className5,containerClass,buttonClass, removeButtonClass , child, initialClickEvent} = this.props;
    return (
      <section   className="education ">
        <div >Education</div>
         {/* <button className = {className1} type="button" onClick={initialClickEvent}>Add</button> */}
          {/* {child.map((element,index)=>{
            return <section id={index} className="group" key={uniqid()}> {React.cloneElement(element, { onChange: onChange , value:value1})}</section>
          })} */}
       
        {/* <div>Personal Details</div> */}
        <Field
          header = "Education"
          placeholder1="School Name"
          placeholder2="Major" placeholder3="Date From"
          placeholder4="Date Until"
          placeholder5="Location"
         
          className1="School-Name"
          className2="Major" className3="Date-From-Education"
          className4="Date-Until-Education"
          className5="Location"
          onChange={onChange}
          onSubmit={onSubmit}
          value1={value1}
          value2={value2}
          value3={value3}
          value4={value4}
          value5={value5}
          id={id}
          // value2={emailValue}
          // value3={phoneValue}
          // value4={currentTitleValue}
          // value5={summaryValue}
          buttonClass = "disable"
          removeButtonClass = "disable"
        ></Field>
      </section>
    );
  }
}
{/* <Field
          header="Work Experience"
          placeholder1="Company Name"
          placeholder2="Position"
          placeholder3="Date From"
          placeholder4="Date Until"
          placeholder5="Details"
          className1 = {className1}
          className2={className2}
          className3={className3}
          className4={className4}
          className5={className5}
          containerClass = {containerClass}
          buttonClass = {buttonClass}
          removeButtonClass = {removeButtonClass}
          onChange={onChange}
          addButtonEvent={addButtonEvent}
          removeButtonEvent = {removeButtonEvent}
         
        ></Field> */}
import { Component } from "react";
import Field from "./Field";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onChange, addButtonEvent, removeButtonEvent, className1, className2, className3, className4, className5,containerClass,buttonClass, removeButtonClass } = this.props;
    return (
      <section className="experience ">
        <Field
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
         
        ></Field>
      </section>
    );
  }
}

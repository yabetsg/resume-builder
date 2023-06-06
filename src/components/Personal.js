import React, { Component } from "react";

import uniqid from "uniqid";
import Field from "./Field";

export default class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, onSubmit, nameValue, emailValue, phoneValue, currentTitleValue, summaryValue } =
      this.props;
    return (
      <section className="personal-details">
        <Field
          header = "Peronal Details"
          placeholder1="Name"
          placeholder2="Email"
          placeholder3="Phone"
          placeholder4="Current title"
          placeholder5="Summary"
          className1="name"
          className2="email"
          className3="phone"
          className4="current-title"
          className5="summary"
          onChange={onChange}
          onSubmit={onSubmit}
          value1={nameValue}
          value2={emailValue}
          value3={phoneValue}
          value4={currentTitleValue}
          value5={summaryValue}
          buttonClass = "disable"
          removeButtonClass = "disable"
        ></Field>
      </section>
    );
  }
}

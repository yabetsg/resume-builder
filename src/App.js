
import "./styles/App.css";
import Personal from "./components/Personal";
import React, { Component, useRef } from "react";
import PersonalOverview from "./components/PersonalOverview";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { name: "", email: "", phone: "", currentTitle: "", summary: "" },
      inputs: {
        personal: [],
      },
      class:{experienceClass:'experience-add-btn'},
      enable:{experience:'disable'}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.remove = this.remove.bind(this);
  }

  onChange(e) {
    const { name, email, phone, currentTitle, summary } = this.state.input;
    switch (e.target.className) {
      case "name":
        this.setState({
          input: {
            name: e.target.value,
            email: email,
            phone: phone,
            currentTitle: currentTitle,
            summary: summary,
          },
        });

        break;

      case "email":
        this.setState({
          input: {
            name: name,
            email: e.target.value,
            phone: phone,
            currentTitle: currentTitle,
            summary: summary,
          },
        });

        break;

      case "phone":
        this.setState({
          input: {
            name: name,
            email: email,
            phone: e.target.value,
            currentTitle: currentTitle,
            summary: summary,
          },
        });
        break;
      case "current-title":
        this.setState({
          input: {
            name: name,
            email: email,
            phone: phone,
            currentTitle: e.target.value,
            summary: summary,
          },
        });
        break;
      case "summary":
        this.setState({
          input: {
            name: name,
            email: email,
            phone: phone,
            currentTitle: currentTitle,
            summary: e.target.value,
          },
        });
        break;
      default: {
        this.setState({
          input: {
            name: name,
            email: email,
            phone: phone,
            currentTitle: currentTitle,
            summary: summary,
          },
        });
      }
    }
  }
  onSubmit(e) {
    const { name, email, phone, currentTitle, summary } = this.state.input;
    e.preventDefault();

    this.setState({
      inputs: {
        personal: this.state.inputs.personal.concat(
          name,
          email,
          phone,
          currentTitle,
          summary
        ),
      },
      input: { name: "", email: "", phone: "", currentTitle: "", summary: "" },
    });
  
    if(e.target.className === 'experience-add-btn'){
        this.setState({
          enable:{experience:'enable'}
        })
    }
    
  }

  remove(e){
   
    if(e.target.className === 'enable'){
      this.setState({
        enable:{experience:'disable'}
      })
  }
  }
  render() {
    const { name, email, phone, currentTitle, summary } = this.state.input;
    return (
      <>
        <Personal
          addButtonEvent={this.onSubmit}
          onChange={this.onChange}
          nameValue={name}
          emailValue={email}
          phoneValue={phone}
          currentTitleValue={currentTitle}
          summaryValue={summary}
        ></Personal>

       {/* <PersonalOverview inputs={this.state.inputs}></PersonalOverview> */}
        <Experience
          addButtonEvent={this.onSubmit}
          removeButtonEvent = {this.remove}
          onChange={this.onChange}
          containerClass = {this.state.enable.experience}
          buttonClass = {this.state.class.experienceClass}

          removeButtonClass = {this.state.enable.experience}
        ></Experience>

        <Education
          addButtonEvent={this.onSubmit}
          onChange={this.onChange}
          containerClass = "disable"
        ></Education>
      </>
    );
  }
}

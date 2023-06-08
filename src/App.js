
import "./styles/App.css";
import Personal from "./components/Personal";
import React, { Component ,useRef,createRef} from "react";
import PersonalOverview from "./components/PersonalOverview";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Field from "./components/Field";
import uniqid from 'uniqid';
import ExperienceView from "./components/ExperienceView";
import View from "./components/View";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { name: "", email: "", phone: "", currentTitle: "", summary: "" },
      inputs: {
        personal: [],
      },
      class:{experienceClass:'experience-add-btn'},
      enable:{experience:'enable'},
      childs: {experience:[],id:0},
      view:{experience:[{company:''}]},
      value:{experience:{company0:''}}
    };
   
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.change = this.change.bind(this);
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
        case "Company-Name":
          this.setState({
            
            value:{experience:{company0:e.target.value}}
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
        // this.setState({
        //   input: {
        //     name: name,
        //     email: email,
        //     phone: phone,
        //     currentTitle: currentTitle,
        //     summary: summary,
        //   },
        // });
      }
    }
  }
  change(e){
     
    const id = e.target[0].id;
    
    const inputValue = e.target[0].value;
    
    
 
    e.preventDefault();
  this.setState({
    view:{experience:this.state.view.experience.concat(this.state.view.experience.filter((_,index)=>e.target.id==index)[id].company=inputValue)},
    value:{experience:{company0:e.target[0].value}}
  })
  console.log( this.state.value.experience)
 
  // console.log(this.state.view.experience);
}

    removeExperience(e){
      const sectionId = e.target.parentNode.parentNode.parentNode.parentNode.id;
     // console.log(e.target.parentNode.parentNode.parentNode.parentNode.id);  
      this.setState({
        childs:{experience:this.state.childs.experience.filter((_,index)=>sectionId!=index)}
      })
      
      if(this.state.childs.experience.length === 1){
        this.setState({
          enable:{experience:'enable'}
        })
      }
    console.log(this.state.childs.experience);
  }

  addExperience(e){
  
    this.setState({
      childs:{experience:this.state.childs.experience.concat(<Field  placeholder1="Company Name"
      placeholder2="Position" placeholder3="Date From"
      placeholder4="Date Until"
      placeholder5="Details"  className1="Company-Name"
      className2="Position" className3="Date-From"
      className4="Date-Until"
      className5="Details"  clickEvent = {this.addExperience} removeButtonEvent = {this.removeExperience}  onSubmit = {this.change}  id={this.state.childs.id}></Field>),
      
      id:this.state.childs.id+1},

      enable:{experience:'disable'},
      // childs:{id:this.state.childs.id+1}
    })
   
   
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
  
    // if(e.target.className === 'experience-add-btn'){
    //     this.setState({
    //       enable:{experience:'disable'}
    //     })
    // }
    
  }


  render() {
    const { name, email, phone, currentTitle, summary } = this.state.input;
    
    return (
      <>
      <div className="resume-form">
        <Personal
          addButtonEvent={this.onSubmit}
          onChange={this.onChange}
           nameValue={name}
          emailValue={email}
          phoneValue={phone}
          currentTitleValue={currentTitle}
          summaryValue={summary}
        ></Personal>

        
         <Experience  className1 = {this.state.enable.experience} initialClickEvent={this.addExperience} clickEvent = {this.addExperience}child={
       this.state.childs.experience}> 
         
        </Experience>
     
      </div>
          <div className="resume-view">
             <ExperienceView child={[<View value1={this.state.view.experience[0].company} id = "0" className1 = "Company-Name"></View>]}></ExperienceView>
          </div>
          </>
    );
  }
}
   {/* <div>
          <Experience></Experience>
          <button onClick={this.add}>test </button> 
            {this.child}
        </div> */}
      


        {/* <Education
          addButtonEvent={this.onSubmit}
          onChange={this.onChange}
          containerClass = "disable"
        ></Education> */}
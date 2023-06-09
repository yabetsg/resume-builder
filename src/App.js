
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
      view:{experience:[]},
      value:{experience:[{company0:''}]},
      viewChilds:{experience:[]}
    };
   
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.change = this.change.bind(this);

    this.store = [];
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
    const map = new Map();
   // console.log(e.target[0].id)
    for(let i=0;i<5;i++){
      map.set(`id${i}`,e.target[i].id)
      map.set(`className${i}`,e.target[i].className)
      map.set(`value${i}`,e.target[i].value)
     
    }
    this.store.splice(map.get('id0'),0,map);
    //console.log(map);
    // const id1 = e.target[0].id;
    // const className1 = e.target[0].className;
    // const inputValue1 = e.target[0].value;
    let company = `companyName${map.get('id0')}`
    let position = `position${map.get('id0')}`
    let dateFrom = `dateFrom${map.get('id0')}`
    let dateUntil = `dateUntil${map.get('id0')}`
    let details = `details${map.get('id0')}`
    
    const filtered = this.state.view.experience.filter((_,index)=>e.target[0].id==index)[0];
    // console.log(filtered)
    filtered.set(company,this.store[0].get(`value${0}`));
    filtered.set(position,this.store[0].get(`value${1}`));
    filtered.set(dateFrom,this.store[0].get(`value${2}`));
    filtered.set(details,this.store[0].get(`value${3}`));
    const id = this.state.childs.id-1;
    e.preventDefault();
  this.setState({
    view:{experience:this.state.view.experience.concat(filtered)},
    value:{experience:{company0:e.target[0].value}},
    viewChilds:{experience:this.state.viewChilds.experience.concat(<View value0 = {this.state.view.experience[id].get(company) } value1 = {this.state.view.experience[id].get(position)} value2 = {this.state.view.experience[id].get(dateFrom)} value3 = {this.state.view.experience[id].get(dateUntil)} value4 = {this.state.view.experience[id].get(details)} ></View>)}
  })
  // let filtered = this.state.view.experience.filter((_,index)=>e.target.id==index);
 // console.log(this.store[map.get('id0')].get('value0'));
  console.log(this.state.view.experience);
 // console.log( this.state.view.experience.filter((_,index)=>e.target.id==index)[map.get('id0')].set('companyName0',this.store[map.get('id0')].get('value0')))

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
   // console.log(this.state.childs.experience);
  }
 
  addExperience(e){
    const mapView = new Map();
    mapView.set(`companyName${this.state.childs.id}`,' ')
    mapView.set(`position${this.state.childs.id}`,' ')
    mapView.set(`dateFrom${this.state.childs.id}`,' ')
    mapView.set(`dateUntil${this.state.childs.id}`,' ')
    mapView.set(`details${this.state.childs.id}`,' ')
    // for(let i=0;i<this.mapView.size;i++){ 
    //   console.log(this.mapView.entries().next().value);
       // Object.assign({},this.mapView.entries().next().value)
    // }
    
    //console.log(this.mapView);
   // const objView = Object.assign({},mapView.entries().next().value)
   // console.log(Object.assign({},this.mapView.entries().next().value));
    //console.log(objView);
   // console.log(Array.from(map.keys()));
   const id = this.state.childs.id;
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
      view:{experience:this.state.view.experience.concat(mapView)},
       //viewChilds:{experience:this.state.viewChilds.experience.concat(<View value0 = {this.state.view.experience[id].get('companyName0')}></View>)}
    })
    
  
  }
  a = ()=>(this.state.view.experience[0])
   
  onSubmit(e) {
    const { name, email, phone, currentTitle, summary } = this.state.input;
    const id = this.state.childs.id;
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
            {(this.state.view.experience.length!=0)?
             (<ExperienceView child={this.state.viewChilds.experience}></ExperienceView>):''}
            {/* [<View value1={this.state.view.experience[id].get('companyName0')} id = "0" className1 = "Company-Name"></View>] */}
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
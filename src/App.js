
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
      experienceInput:{company:"",position:'',dateFrom:'',dateUntil:'',details:''},
      experienceInput2:{company:"",position:'',dateFrom:'',dateUntil:'',details:''},
      educationInput:{school:"",major:'',dateFromEducation:'',dateUntilEducation:'',location:''},
      educationInput2:{school:"",major:'',dateFromEducation:'',dateUntilEducation:'',location:''},
      inputs: {
        personal: [],experience:[],experience2:[],education:[],education2:[]
      },
      class:{experienceClass:'experience-add-btn'},
      enable:{experience:'enable'},
      childs: {experience:[],id:0},
      view:{experience:[],personal:[]},
      value:{experience:[]},
      viewChilds:{personal:[],experience:[],experience2:[],education:[],education2:[]},
     
  
    };
  // [{company:'',position:'',dateFrom:'',dateUntil:'',details:''},
      // {company:'',position:'',dateFrom:'',dateUntil:'',details:''},
      // {company:'',position:'',dateFrom:'',dateUntil:'',details:''}]
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
    this.changeEvent = this.changeEvent.bind(this);
    this.store = [];
  }

  onChange(e) {
    const { name, email, phone, currentTitle, summary } = this.state.input;
    const id = e.target.id;
    const className = e.target.className;
  
    const updatedExperienceInput = {
      company: this.state.experienceInput.company,
      position: this.state.experienceInput.position,
      dateFrom: this.state.experienceInput.dateFrom,
      dateUntil: this.state.experienceInput.dateUntil,
      details: this.state.experienceInput.details,
    };
  
    const updatedExperienceInput2 = {
      company: this.state.experienceInput2.company,
      position: this.state.experienceInput2.position,
      dateFrom: this.state.experienceInput2.dateFrom,
      dateUntil: this.state.experienceInput2.dateUntil,
      details: this.state.experienceInput2.details,
    };
  
    const updatedEducationInput = {
      school: this.state.educationInput.school,
      major: this.state.educationInput.major,
      dateFromEducation: this.state.educationInput.dateFromEducation,
      dateUntilEducation: this.state.educationInput.dateUntilEducation,
      location: this.state.educationInput.location,
    };
  
    const updatedEducationInput2 = {
      school: this.state.educationInput2.school,
      major: this.state.educationInput2.major,
      dateFromEducation: this.state.educationInput2.dateFromEducation,
      dateUntilEducation: this.state.educationInput2.dateUntilEducation,
      location: this.state.educationInput2.location,
    };
  
    switch (className) {
      case "name":
        this.setState({ input: { ...this.state.input, name: e.target.value } });
        break;
      case "email":
        this.setState({ input: { ...this.state.input, email: e.target.value } });
        break;
      case "phone":
        this.setState({ input: { ...this.state.input, phone: e.target.value } });
        break;
      case "current-title":
        this.setState({ input: { ...this.state.input, currentTitle: e.target.value } });
        break;
      case "summary":
        this.setState({ input: { ...this.state.input, summary: e.target.value } });
        break;
      case "Company-Name":
        if (id == 0) {
          this.setState({ experienceInput: { ...updatedExperienceInput, company: e.target.value } });
        } else {
          this.setState({ experienceInput2: { ...updatedExperienceInput2, company: e.target.value } });
        }
        break;
      case "Position":
        if (id == 0) {
          this.setState({ experienceInput: { ...updatedExperienceInput, position: e.target.value } });
        } else {
          this.setState({ experienceInput2: { ...updatedExperienceInput2, position: e.target.value } });
        }
        break;
      case "Date-From":
        if (id == 0) {
          this.setState({ experienceInput: { ...updatedExperienceInput, dateFrom: e.target.value } });
        } else {
          this.setState({ experienceInput2: { ...updatedExperienceInput2, dateFrom: e.target.value } });
        }
        break;
      case "Date-Until":
        if (id == 0) {
          this.setState({ experienceInput: { ...updatedExperienceInput, dateUntil: e.target.value } });
        } else {
          this.setState({ experienceInput2: { ...updatedExperienceInput2, dateUntil: e.target.value } });
        }
        break;
      case "Details":
        if (id == 0) {
          this.setState({ experienceInput: { ...updatedExperienceInput, details: e.target.value } });
        } else {
          this.setState({ experienceInput2: { ...updatedExperienceInput2, details: e.target.value } });
        }
        break;
      case "School-Name":
        if (id == 0) {
          this.setState({ educationInput: { ...updatedEducationInput, school: e.target.value } });
        } else {
          this.setState({ educationInput2: { ...updatedEducationInput2, school: e.target.value } });
        }
        break;
      case "Major":
        if (id == 0) {
          this.setState({ educationInput: { ...updatedEducationInput, major: e.target.value } });
        } else {
          this.setState({ educationInput2: { ...updatedEducationInput2, major: e.target.value } });
        }
        break;
      case "Date-From-Education":
        if (id == 0) {
          this.setState({ educationInput: { ...updatedEducationInput, dateFromEducation: e.target.value } });
        } else {
          this.setState({ educationInput2: { ...updatedEducationInput2, dateFromEducation: e.target.value } });
        }
        break;
      case "Date-Until-Education":
        if (id == 0) {
          this.setState({ educationInput: { ...updatedEducationInput, dateUntilEducation: e.target.value } });
        } else {
          this.setState({ educationInput2: { ...updatedEducationInput2, dateUntilEducation: e.target.value } });
        }
        break;
      case "Location":
        if (id == 0) {
          this.setState({ educationInput: { ...updatedEducationInput, location: e.target.value } });
        } else {
          this.setState({ educationInput2: { ...updatedEducationInput2, location: e.target.value } });
        }
        break;
      default:
        break;
    }
  }
  
  
  changeEvent(e){
    console.log(e.target.value);
    this.setState({
      test:e.target.value
    })
   
  }
  
  submitEvent(e){
    e.preventDefault();
    const map = new Map();
    
    for(let i=0;i<5;i++){
      map.set(`id${i}`,e.target[i].id)
      map.set(`className${i}`,e.target[i].className)
      map.set(`value${i}`,e.target[i].value)
     
    }
    // filter((_,index)=>e.target[0].id==index)[0].props.className1='x'
    // if(this.store.length==0){
    //   for(let i=0;i<=map.get('id0');i++){
    //       this.store.fill(0,i)
    //   } 
     
    // }
    this.store.splice(map.get('id0'),1,map);
    // console.log(this.store);
    // console.log(e.target[0].value);
    //console.log(this.state.childs.experience.filter((_,index)=>e.target[0].id==index)[0].props)
    //console.log(map);
    // const id1 = e.target[0].id;
    // const className1 = e.target[0].className;
    // const inputValue1 = e.target[0].value;
    let company = `companyName${map.get('id0')}`
    let position = `position${map.get('id0')}`
    let dateFrom = `dateFrom${map.get('id0')}`
    let dateUntil = `dateUntil${map.get('id0')}`
    let details = `details${map.get('id0')}`
     const id = this.state.childs.id-1;
    const filtered = this.state.view.experience.filter((_,index)=>e.target[0].id==index)[0];
    // console.log(filtered)
    
    filtered.set(company,this.store[map.get('id0')].get(`value${0}`));
    filtered.set(position,this.store[map.get('id0')].get(`value${1}`));
    filtered.set(dateFrom,this.store[map.get('id0')].get(`value${2}`));
    filtered.set(dateUntil,this.store[map.get('id0')].get(`value${3}`));
    filtered.set(details,this.store[map.get('id0')].get(`value${4}`));
   
    if(this.state.viewChilds.experience?.length==0){
          this.state.viewChilds.experience.splice(map.get('id0'),0,<View className1='companyName' className2='position'  className3= 'dateFrom' className4='dateUntil' className5='details' value0 = {this.state.view.experience[id].get(company) } value1 = {this.state.view.experience[id].get(position)} value2 = {this.state.view.experience[id].get(dateFrom)} value3 = {this.state.view.experience[id].get(dateUntil)} value4 = {this.state.view.experience[id].get(details)} ></View>)
          console.log('if');
        }else if(this.state.viewChilds.experience?.length>0){
      this.state.viewChilds.experience?.splice(map.get('id0'),1,<View className1='companyName' className2='position'  className3= 'dateFrom' className4='dateUntil' className5='details' value0 = {this.state.view.experience[id].get(company) } value1 = {this.state.view.experience[id].get(position)} value2 = {this.state.view.experience[id].get(dateFrom)} value3 = {this.state.view.experience[id].get(dateUntil)} value4 = {this.state.view.experience[id].get(details)} ></View>)
          console.log('else');
    }
    console.log(this.state.viewChilds.experience);
  this.setState((prevStates)=>({
    ...prevStates,
  
    view:{experience:this.state.view.experience?.concat(filtered)},
    value:{experience:{company0:e.target[0].value}},
    viewChilds:{experience:this.state.viewChilds.experience},
   // viewChilds:{experience:this.state.viewChilds.experience.concat(<View value0 = {this.state.view.experience[id].get(company) } value1 = {this.state.view.experience[id].get(position)} value2 = {this.state.view.experience[id].get(dateFrom)} value3 = {this.state.view.experience[id].get(dateUntil)} value4 = {this.state.view.experience[id].get(details)} ></View>)}
    
  }))  
  console.log(this.state.viewChilds.experience)
///console.log(this.state.viewChilds.experience);

  //console.log(e.target[0])
  // let filtered = this.state.view.experience.filter((_,index)=>e.target.id==index);
 // console.log(this.store[map.get('id0')].get('value0'));
 // console.log(this.state.view.experience);
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
    this.store.splice(this.store.length,0,'empty')
    const mapView = new Map();
    const id = this.state.childs.id;
    mapView.set(`companyName${this.state.childs.id}`,'x ')
    mapView.set(`position${this.state.childs.id}`,'x ')
    mapView.set(`dateFrom${this.state.childs.id}`,'x ')
    mapView.set(`dateUntil${this.state.childs.id}`,'x ')
    mapView.set(`details${this.state.childs.id}`,' x')
    // for(let i=0;i<this.mapView.size;i++){ 
    //   console.log(this.mapView.entries().next().value);
       // Object.assign({},this.mapView.entries().next().value)
    // }
    
    //console.log(this.mapView);
   // const objView = Object.assign({},mapView.entries().next().value)
   // console.log(Object.assign({},this.mapView.entries().next().value));
    //console.log(objView);
   // console.log(Array.from(map.keys()));
   let company = `companyName${id}`
    let position = `position${id}`
    let dateFrom = `dateFrom${id}`
    let dateUntil = `dateUntil${id}`
    let details = `details${id}`
    //console.log(id);
    this.setState({
      childs:{experience:this.state.childs.experience.concat(<Experience onSubmit = {this.onSubmit} onChange = {this.onChange} value1={this.state.experienceInput.company} value2={this.state.experienceInput.position} value3={this.state.experienceInput.dateFrom} value4={this.state.experienceInput.dateUntil} value5={this.state.experienceInput.details}   initialClickEvent={this.addExperience} clickEvent = {this.addExperience}> 

        </Experience>),
      
      id:this.state.childs.id+1},

      enable:{experience:'disable'},
      view:{experience:this.state.view.experience.concat(mapView)},
      inputs:{experience:this.state.inputs.experience.concat(mapView)}
       //viewChilds:{experience:this.state.viewChilds.experience.concat(<View value0 = {this.state.view.experience[id].get('companyName0')}></View>)}
    })
    
 // console.log(this.state.view.experience);
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, email, phone, currentTitle, summary } = this.state.input;
    const {company,position,dateFrom,dateUntil,details} = this.state.experienceInput;
    const {school,major,dateFromEducation,dateUntilEducation,location} = this.state.educationInput;
    const id = this.state.childs.id;
    

    this.setState({
      viewChilds: {
        personal: this.state.inputs.personal.concat(
          name,
          email,
          phone,
          currentTitle,
          summary
        ),
         experience:this.state.inputs.experience.concat(company,position,dateFrom,dateUntil,details),
         experience2:this.state.inputs.experience2.concat(this.state.experienceInput2.company,this.state.experienceInput2.position,this.state.experienceInput2.dateFrom,this.state.experienceInput2.dateUntil,this.state.experienceInput2.details),
         education:this.state.inputs.education.concat(school,major,dateFromEducation,dateUntilEducation,location)
      },
    
     
    });
  
    
  }


  render() {
    const { name, email, phone, currentTitle, summary } = this.state.input;
    //console.log(this.state.viewChilds.personal.length==0);
    // const primaryExp = this.state.experienceInput?.filter((_,index)=>0==index)[0]
    // const secondaryExp = this.state.experienceInput?.filter((_,index)=>1==index)[0]
    // const {company,position,dateFrom,dateUntil,details} = primaryExp;
    // const {company2,position2,dateFrom2,dateUntil2,details2} = secondaryExp;
    
    return (
      <>
     
      <div className="resume-form">
        <Personal
        onSubmit = {this.onSubmit}
          addButtonEvent={this.onSubmit}
          onChange={this.onChange}
           nameValue={name}
          emailValue={email}
          phoneValue={phone}
          currentTitleValue={currentTitle}
          summaryValue={summary}
        ></Personal>
        
        
         <Experience id={0} onSubmit = {this.onSubmit} onChange = {this.onChange} value1={this.state.experienceInput.company} value2={this.state.experienceInput.position} value3={this.state.experienceInput.dateFrom} value4={this.state.experienceInput.dateUntil} value5={this.state.experienceInput.details}   initialClickEvent={this.addExperience} clickEvent = {this.addExperience}> 
         
        </Experience>
        <Experience id={1} onSubmit = {this.onSubmit} onChange = {this.onChange}  value1={this.state.experienceInput2.company} value2={this.state.experienceInput2.position} value3={this.state.experienceInput2.dateFrom} value4={this.state.experienceInput2.dateUntil} value5={this.state.experienceInput2.details}    initialClickEvent={this.addExperience} clickEvent = {this.addExperience}> 
         
        </Experience>

        <Education id={0} onSubmit = {this.onSubmit} onChange = {this.onChange}  value1={this.state.educationInput.school} value2={this.state.educationInput.major} value3={this.state.educationInput.dateFromEducation} value4={this.state.educationInput.dateUntilEducation} value5={this.state.educationInput.location}    initialClickEvent={this.addExperience} clickEvent = {this.addExperience}> 
         
        </Education>
        {/* <Education id={1} onSubmit = {this.onSubmit} onChange = {this.onChange}  value1={this.state.educationInput2.school} value2={this.state.educationInput2.major} value3={this.state.educationInput2.dateFromEducation} value4={this.state.educationInput2.dateUntilEducation} value5={this.state.educationInput2.location}    initialClickEvent={this.addExperience} clickEvent = {this.addExperience}> 

        </Education> */}

        
     
      </div>
          <div className="resume-view"> 
            {
             <ExperienceView  child={this.state.viewChilds.personal}></ExperienceView>}
              <View className1='companyName' className2='position'  className3= 'dateFrom' className4='dateUntil' className5='details' value0 = {this.state.experienceInput.company } value1 = {this.state.experienceInput.position} value2 = {this.state.experienceInput.dateFrom} value3 = {this.state.experienceInput.dateUntil} value4 = {this.state.experienceInput.details} ></View>
              <View className1='companyName' className2='position'  className3= 'dateFrom' className4='dateUntil' className5='details' value0 = {this.state.experienceInput2.company } value1 = {this.state.experienceInput2.position} value2 = {this.state.experienceInput2.dateFrom} value3 = {this.state.experienceInput2.dateUntil} value4 = {this.state.experienceInput2.details} ></View>

              {
             <ExperienceView  child={this.state.viewChilds.experience}></ExperienceView>}
               {
             <ExperienceView  child={this.state.viewChilds.experience2}></ExperienceView>}
              {
             <ExperienceView  child={this.state.viewChilds.education}></ExperienceView>}
{/*              
            {(this.state.view.experience?.length!=0)?
             (<ExperienceView title={"Experience"}  child={this.state.viewChilds.experience}></ExperienceView>):''} */}
            
          
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
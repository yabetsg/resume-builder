
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
        personal: [],experience:[]
      },
      class:{experienceClass:'experience-add-btn'},
      enable:{experience:'enable'},
      childs: {experience:[],id:0},
      view:{experience:[],personal:[]},
      value:{experience:[{company0:''}]},
      viewChilds:{personal:[],experience:[]},
      test:''
    };
   
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

    this.setState({
      viewChilds: {
        personal: this.state.viewChilds.personal.concat(
          name,
          email,
          phone,
          currentTitle,
          summary
        ),
      },
      // input: { name: "", email: "", phone: "", currentTitle: "", summary: "" },
     
    });
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
   
    if(this.state.viewChilds.experience.length==0){
          this.state.viewChilds.experience.splice(map.get('id0'),0,<View className1='companyName' className2='position'  className3= 'dateFrom' className4='dateUntil' className5='details' value0 = {this.state.view.experience[id].get(company) } value1 = {this.state.view.experience[id].get(position)} value2 = {this.state.view.experience[id].get(dateFrom)} value3 = {this.state.view.experience[id].get(dateUntil)} value4 = {this.state.view.experience[id].get(details)} ></View>)
    }else{
      this.state.viewChilds.experience.splice(map.get('id0'),1,<View className1='companyName' className2='position'  className3= 'dateFrom' className4='dateUntil' className5='details' value0 = {this.state.view.experience[id].get(company) } value1 = {this.state.view.experience[id].get(position)} value2 = {this.state.view.experience[id].get(dateFrom)} value3 = {this.state.view.experience[id].get(dateUntil)} value4 = {this.state.view.experience[id].get(details)} ></View>)

    }
  this.setState({
    view:{experience:this.state.view.experience.concat(filtered)},
    value:{experience:{company0:e.target[0].value}},
    viewChilds:{experience:this.state.viewChilds.experience},
   // viewChilds:{experience:this.state.viewChilds.experience.concat(<View value0 = {this.state.view.experience[id].get(company) } value1 = {this.state.view.experience[id].get(position)} value2 = {this.state.view.experience[id].get(dateFrom)} value3 = {this.state.view.experience[id].get(dateUntil)} value4 = {this.state.view.experience[id].get(details)} ></View>)}

  })
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
    console.log(id);
    this.setState({
      childs:{experience:this.state.childs.experience.concat(<Field  placeholder1="Company Name"
      placeholder2="Position" placeholder3="Date From"
      placeholder4="Date Until"
      placeholder5="Details"  className1="Company-Name"
      className2="Position" className3="Date-From"
      className4="Date-Until"
      className5="Details" value1={(this.state.test!=='')?this.state.test:undefined} clickEvent = {this.addExperience} removeButtonEvent = {this.removeExperience}  onSubmit = {this.submitEvent}  id={this.state.childs.id}></Field>),
      
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
      },
      // input: { name: "", email: "", phone: "", currentTitle: "", summary: "" },
     
    });
    
    // if(e.target.className === 'experience-add-btn'){
    //     this.setState({
    //       enable:{experience:'disable'}
    //     })
    // }
    
  }


  render() {
    const { name, email, phone, currentTitle, summary } = this.state.input;
    //console.log(this.state.viewChilds.personal.length==0);
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
      
        
         <Experience  className1 = {this.state.enable.experience} initialClickEvent={this.addExperience} clickEvent = {this.addExperience}child={
       this.state.childs.experience}> 
         
        </Experience>
     
      </div>
          <div className="resume-view"> 
         
            {/* {
             <ExperienceView  child={this.state.viewChilds.personal}></ExperienceView>} */}
             
            {(this.state.view.experience.length!=0)?
             (<ExperienceView title={"Experience"}  child={this.state.viewChilds.experience}></ExperienceView>):console.log('default')}
            
          
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
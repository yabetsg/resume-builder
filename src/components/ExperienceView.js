import { Component } from "react";

export default class ExperienceView extends Component{
    render(){
        const {child,title} = this.props;
        return(
            
            <div className="experience-view">

            
            <header>{title}</header>
            {child.map((element,index)=>{return <div id={index} key={index}>{element}</div>})}
             
              
         </div>
        );
    }
}
import { Component } from "react";

export default class ExperienceView extends Component{
    render(){
        const {child} = this.props;
        return(
            <> 
            {child.map((element,index)=>{return <div id={index} key={index}>{element}</div>})}
            </>
           
        );
    }
}
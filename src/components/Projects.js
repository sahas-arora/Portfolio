import React, { Component } from "react";


import projects from "../helpers/projectDetails";
import "../styles/Projects.css";

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.renderProjectInfo = this.renderProjectInfo.bind(this);
    }


    renderProjectInfo() {
        let pros = Object.keys(projects);

        return pros.map(project => {
            let keys = projects[project];
            return(
                <div className="projects-descrip">  
                <div className="project-image">
                    <img 
                        alt={`${project}`}
                        src={require(`../assets/images/${project}.png`)} 
                        className="pro-img"/>
                </div>
                <div className="project-info">
                    <div className="project-heading">
                        {keys.heading}
                    </div>
 
                    <div className="project-details">
                        <div className="line">{keys.description.line1}</div>
                        <div className="line">{keys.description.line2}</div>
                    </div>

                    <div className="technologies">
                        {keys.technology.map(key => {
                            return(
                                <div className="indi-tech">
                                    {key}
                                 </div>   
                            )
                        })}
                    </div>
                </div>
            </div>  
            )
        })
    }

    render() {
        return(
            <div className="projects-container wow fadeInLeftBig"
                data-wow-duration="1.s"
                id="Projects"
            >
                <div className="projects">
                    <div className="box-heading">
                        Some of My Projects
                    </div>                 
                    {this.renderProjectInfo()}
                </div>
            </div>
        )
    }
}
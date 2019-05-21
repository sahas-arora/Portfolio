import React, { Component } from "react";

import experience from "../helpers/experienceDetails";
import "../styles/Experience.css";

console.log("Experience is: ", experience);

export default class Experience extends Component {

    constructor(props) {
        super(props);

        this.state = {
            experience: experience,
            selectedExperience: "Tessora",
            title: "Web Developer",
            time: "January 2019 - Present",
            descrip: "ladknasdfnlasdnfkasnfdansdflkasdnfadsfkasdf"
        }
        
        this.renderHeadings = this.renderHeadings.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.clicked = this.clicked.bind(this);
    }

    componentDidMount() {
        this.setState({ experience: experience});
    }

    componentDidUpdate() {
        console.log("Updated!!");
    }

    renderHeadings() {
        let headings = Object.keys(experience);

        console.log("Selected Experience: ", this.state.selectedExperience);

        return headings.map((heading,index) => {
            return (
                <div 
                key={index}
                className={`company-name ${
                    this.state.selectedExperience === heading ? "selected-tab" : ""
                  }`}
                onClick={() => this.setState({ selectedExperience: heading})}
                >
                {heading}
                </div>
            )
        });

    }

    renderContent() {
       let propObject = experience[this.state.selectedExperience];
        console.log("reached");
        return(
            <div className="exp-content">
                <div className="experience-title">
                    {`${propObject.title} at ${this.state.selectedExperience}`}                
                </div>

                <div className="experience-time-frame">
                    {propObject.timeFrame}
                </div>

                <div className="experience-location">
                    {`${propObject.location},${propObject.state},${propObject.country}`}
                </div>

                    <ul>
                        <li className="descrip-text" >{propObject.description.line1}</li>
                        <li className="descrip-text">{propObject.description.line2}</li>
                    </ul>       

            </div>
        );
    }

    clicked() {
        console.log("Clicked!!");
    }


    render() {
        return(
            <div className="experience-container wow fadeInRightBig"
                data-wow-duration="1.5s"
            >
                <div className="experience">
                    <div className="box-heading" onClick={() => this.clicked()}>
                        Companies I've Worked For
                    </div>
                    <div className="experience-part-1">    
                        <div className="company">
                            {this.renderHeadings()}
                        </div>
                    </div>
                    <div className="experience-part-2">
                        {this.renderContent()}
                    </div>
                </div>
            </div>
        )
    }
}
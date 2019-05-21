import React, { Component } from "react";

import "../styles/AboutMe.css";

export default class AboutMe extends Component {


    render() {
        return(
            <div className="about-me-container wow fadeInLeftBig "
            data-wow-duration="1.5s" 
            // data-wow-delay="1s"
            
            >
                <div className="about-me">
                    <div className="about-me-left">

                        <div className="about-me-heading">
                           About Me
                        </div>

                        <div className="about-me-content-1">
                            I'm Sahas, a software engineer from India
                            who's based in San Francisco. I love to play the guitar,
                            write songs and sing. But above all,
                            I love to code. I look at code and music as means to 
                            express yourself, your ideas and showcase creativity. 
                        </div>
                        <div className="about-me-content-2">
                            After graduating from San Francisco State University,
                            I started working at Tessora LLC as a web developer, 
                            where I'm responsible for overlooking the development 
                            and the maintenance of www.tessoraclothing.com 
                        </div>

                        <div className="about-me-content-3">
                            Here are a few technologies that I enjoy working with:
                            <div className="list-container">
                                <div className="list-1">
                                    <ul>
                                        <li>React</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                                <div className="list-2">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Docker</li>
                                        <li>Socket.io</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                    
                    
                    </div>

                    <div className="about-me-right">
                        
                        <div className="image-container">
                            <img 
                                className="my-image" 
                                src={require("../assets/images/SahasA.png")}
                                alt="Me" />
                        </div>
                    
                    
                    </div>

                </div>
            </div>
        )
    }
}
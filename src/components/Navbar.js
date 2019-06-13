import React, { Component } from "react";

import "../styles/Navbar.css";

let nav_links = ["About","Experience","Projects","Contact"];

export default class Navbar extends Component {

    constructor(props){
        super(props);

        this.renderLinks = this.renderLinks.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
      }
    
      onScroll() {
        if (window.pageYOffset > 5) {
          document
            .getElementsByClassName("navbar-container")[0]
            .classList.add("nav-add");
        } else {
          document
            .getElementsByClassName("navbar-container")[0]
            .classList.remove("nav-add");
        }

        // var prevScrollpos = window.pageYOffset;
        // var currentScrollPos = window.pageYOffset;
        // if (prevScrollpos > currentScrollPos) {
        //     document.getElementsByClassName("navbar-container").classList.add("nav-show");
        // } else {
        //     document.getElementsByClassName("navbar-container").classList.add("nav-dont");
        // }
        // prevScrollpos = currentScrollPos;
        
      }

 

    renderLinks() {
        return(
            <div id="navbar-right" className="navbar-right">
            {nav_links.map((link) => {
                return(
                    <div className="nav-link" key={link}>
                        <a href={`/#${link}`}> 
                        {link}
                        </a>
                    </div>
                );
            })}
            </div>
        );
    }


    render(){
        return(
            <div className="navbar-container">
                <div className="navbar">
                    <div className="navbar-left">
                        <div className="heading">
                            SA
                        </div>
                    </div>
                    {this.renderLinks()}

                </div>
            </div>
        );
    }
}
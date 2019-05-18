import React, { Component } from "react";

import "../styles/Navbar.css";

let Link = ["About","Experience","Projects","Contact"];

export default class Navbar extends Component {

    constructor(props){
        super(props);

        this.renderLinks = this.renderLinks.bind(this);
    }

    renderLinks() {
        return(
            <div className="navbar-right">
            {Link.map((link) => {
                return(
                    <div className="nav-link" key={link}>
                        {link}
                    </div>
                );
            })}
            </div>
        )



    //    return Link.map(link => {
    //         console.log(link);
    //        return( 
    //        <div className="navbar-right" key={link}>
    //         <div className="nav-link">
    //             {link}
    //         </div>
    //         </div>
    //        );
    //     });
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
import React, { Component } from "react";

import "../styles/SocialMedia.css";


export default class SocialMedia extends Component {


    constructor(props) {
        super(props);

        this.renderIcons = this.renderIcons.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }


    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        // let contentBar = document.getElementsByClassName("icon-container")[0];
        // let offSet = contentBar.offset();


        // if (window.scrollTop() > offSet.top) {
        //     contentBar.stop().animate( {
        //         marginTop: window.scrollTop() - offSet.top + 15
        //     });
        // } else {
        //     contentBar.stop().animate({
        //         marginTop: 0
        //     });
        // }
    }


    renderIcons() {

        // let customStyle = {{ "border": "1px solid red"}};
        
        return (
            <div className="icon-container">
            {icons.map(iconName => {
                return (
                   <i className={`${iconName} grey big  icon`} />
                  );})}
            </div>
        );
    }

    render() {
        return(
            <div className="social-media-container">
                <div className="social-media">

                    <div className="social-media-left">
                         {this.renderIcons()}
                    </div>


                    <div className="social-media-right">
                        <div className="text">
                         sahasarora@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let icons = ["github","linkedin","facebook", "instagram"];

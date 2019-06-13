import React, { Component } from "react";

import socialMedia from "../helpers/socialMediaLinks";
import "../styles/SocialMedia.css";


export default class SocialMedia extends Component {


    constructor(props) {
        super(props);

        this.renderIcons = this.renderIcons.bind(this);
    }

    renderIcons() {
        let keys = Object.keys(socialMedia);

        return keys.map(key => {
            return(
            <div className="icon-container wow rollIn" key={key} >
            <a href={socialMedia[key].link}>
                <i className={`${key} grey big icon myHover`} />
            </a>
            </div>
            );
        })

     
    }

    render() {
        return(
            <div className="social-media-container ">            
                <div className="social-media">

                    <div className="social-media-left">
                         {this.renderIcons()}
                    </div>


                    <div className="social-media-right wow fadeInRightBig"
                        data-wow-duration="0.9s"
                    >
                        <div className="text">
                        <a href="mailto: sahasarora@gmail.com">
                         sahasarora@gmail.com
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


import React, { Component } from "react";

import "../styles/Profile.css";

export default class Profile extends Component {

    render() {
        return(
            <div className="profile-container wow fadeInRightBig"
                data-wow-duration="1s"
            >
                <div className="profile">

                    <div className="profile-part-1">
                     <div className="profile-heading">
                        Hello!
                     </div>
                     <div className="profile-me">
                        My name is Sahas Arora.
                     </div>
                        <div className="profile-me-extended-box">
                            <div className="profile-me-extended">
                                 I'm an aspiring software engineer based
                                 in San Francisco, California specializing
                                in building quality websites and web-applications. 
                            </div>
                        </div>
                    </div>

                    <div className="profile-part-2">
                        <button
                        className="my-button"
                        href="sahasarora@gmail.com">
                        Contact Me
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}
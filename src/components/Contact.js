import React, { Component } from "react";

import "../styles/Contact.css";

export default class Contact extends Component {


    render() {
        return(
            <div className="contact-container" id="Contact">
                <div className="contact">
                    <div className="contact-heading">
                        Get In Touch
                    </div>
                    <div className="contact-main-heading">
                        Say Hello
                    </div>
                    <div className="contact-description">
                        I'm actively looking for a new job opportunity,
                        you can always reach out to me using the link
                        below. Or just say hi, life is too unpredicatable
                        and short to not say hi. I'll get back to you as soon as possible!
                    </div>
                    <div className="contact-link">
                        <button className="contact-button" style={{ fontSize: "16px"}}>
                            <a href="mailto:sahasarora@gmail.com">
                                Click Me
                            </a>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}
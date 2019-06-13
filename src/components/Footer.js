import React, { Component } from "react";

import "../styles/Footer.css";

export default class Footer extends Component {

    render() {
        return(
            <div className="footer-container">
                <div className="footer">
                    <div className="footer-line1">
                        Built and designed by Sahas Arora
                    </div>
                    <div className="footer-line2">
                        Inspired by Britanny Chiang
                    </div>
                    <div className="footer-icon-container">
                        <i className="github grey big icon"></i>
                    </div>
                </div>
            </div>
        )
    }
}
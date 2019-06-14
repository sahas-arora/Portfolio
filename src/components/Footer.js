import React, { Component } from "react";

import "../styles/Footer.css";

export default class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = { color: "grey"};
    }

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
                        <a href="https://github.com/sahas-arora/Portfolio">
                            <i 
                                className={`github ${this.state.color} big icon`}
                                onMouseEnter={() => {
                                    this.setState({ color: "blue"})
                                }}
                                onMouseLeave={() => {
                                    this.setState({ color: "grey"})
                                }}
                            ></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
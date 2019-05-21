import React, { Component } from "react";

import Navbar from "./Navbar";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Dummy from "./Dummy";

import "../styles/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="contents">
          <Navbar />
          <Profile />
          <AboutMe />
          <Experience />

          <Dummy />
          <SocialMedia />
        </div>
      </div>
    );
  }
}

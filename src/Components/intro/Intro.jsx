import React, { useState } from "react";
import "./intro.scss";

import Typewriter from "typewriter-effect";

export default function Intro() {


  const [state] = useState({
    
    title: "Web Developer"

  });
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Hritik Yadav</h1>
          <h3 className="effect">Freelance
            <span>
          < Typewriter
            options={{
              autoStart: true, loop: true,
                  delay: 40,
                  
              strings: [
                " Web Developer",
                " Web Designer"
            ],
            
            }}
              />
              </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
        
      </div>
    </div>
  );
}
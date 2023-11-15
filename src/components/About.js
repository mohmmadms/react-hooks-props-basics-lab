import React from "react";
import Links from "./Links";

function About(probs) {
  if (!probs.bio){
    return null;
  }
  else{
  return (
    <div id="about">
      <h2>About Me</h2>
      
      <p>{probs.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Links github={probs.github} linkedin={probs.linkedin}/>}
    </div>
  );
}}

export default About;

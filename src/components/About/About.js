import React from 'react';
import './About.css';


const About = ({hero}) => { 
  return (
  <div className=".about1">
     <h2> ABOUT ME  </h2>
      <div className="about1">
     
        <p> {hero.aboutMe[0].info}</p>
        <p> {hero.aboutMe[1].info}</p>
        <p> {hero.aboutMe[2].info}</p>
        <p> {hero.aboutMe[3].info}</p>
           
  </div> 

  </div>
   );
 };


export default About;

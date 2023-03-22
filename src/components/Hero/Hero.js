import React from 'react';
//import styles from './Hero.module.css';

import './Hero.modules.css';

const Hero = ({hero}) => { 
  return (
  //<div className={"hero"}>
 <div className=".hero">

 <div>
 <img src={hero.image} alt="" />
 </div>
      <div class="card1">
      <h2 className="h2">
        {hero.name} {hero.adress}
      </h2>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>
          tony@starkindustries.com
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>💾<a href={hero.gitHub}>
            GitHub
          </a></p>
  </div> 
  </div>
   );
 };



export default Hero;

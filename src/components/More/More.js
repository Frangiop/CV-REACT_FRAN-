import React from 'react';
import './More.css';
//mport styles from './More.module.css';


const More = ({languages,habilities,volunteer}) => { 
  return (
  
  <div className={"MORE"}>

  <div className="linea"></div>
     <h1> More about me   </h1>
      <div className="more1 div3">
     
        <p> {languages.language}</p>
        
        <p> {"Escrito : " + languages.wrlevel}</p>
        <p> { "Hablado : " +  languages.splevel}</p>
  </div> 

<div >

   <h1>Skills</h1>
   <div className="more1 div3">
   <p>{habilities[0]}</p>
   <p> {habilities[1]}</p>
   </div>
</div>

<div>
 <h1>Volunteer</h1>
  <div className="more1 div2">
 <p>{volunteer[0].name}</p>
 
 </div>

</div>
 
  </div>
   );
 };  


export default More;

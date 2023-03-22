import React from 'react';
import './Experience.css'
//import styles from './Experience.module.css';

const Experience = ({ experience }) => {
  return (
    <div>
    
    <h2 className="letra"> Experience</h2>
      <div className="div4">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Experience;

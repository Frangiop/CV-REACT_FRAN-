
import { useState } from "react";
import  './App.css';
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import More from './components/More/More'
//import { Hero, About, Education, Experience, More } from "./components";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {

  const [showEducation, setShowEducation] = useState(true);

  
  return (
    <div className="App">
  
         <Hero hero={hero} />
         <About hero={hero} />
   <div className="lineas"></div>
         {/* <Education education={education} /> */}
       {/* <Experience experience={experience} />*/}
	       <More
	        languages={languages}
	        habilities={habilities}
	        volunteer={volunteer}
	      />

     <button  className="botones" onClick={() => setShowEducation(true)} >Education</button>
     <button  className="botones" onClick={() => setShowEducation(false)} >Experience </button>
     <div>
        {showEducation ? (
          <Education  education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>

    </div>
  );
}

export default App;

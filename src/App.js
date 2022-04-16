import { useState } from 'react';
import './App.css';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Idiomas from './components/Idiomas/Idiomas';
import Skills from './components/Skills/Skills';
function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
    <Hero/>
    <div className="botones">
    <button className="custom-btn1"
    onClick={() => setShowEducation(true)}>Education</button>
    <button className="custom-btn2"
    onClick={() => setShowEducation(false)}>Experience</button>
    </div>
    <div>
        {showEducation ? (
          <Education/>
        ) : (
          <Experience/>
        )}
      </div>
      <hr/>
      <Idiomas/>
      <hr/>
      <Skills/>
  </div>
  );
}

export default App;

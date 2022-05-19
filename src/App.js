import { useState } from 'react';
import './App.scss';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Idiomas from './components/Idiomas/Idiomas';
import Skills from './components/Skills/Skills';
import { useTranslation } from "react-i18next";
function App() {
  const [showEducation, setShowEducation] = useState(true);
  
  const { t, i18n } = useTranslation("translation");

  const changeLanguage = (code) => {
      i18n.changeLanguage(code);
};

  return (
    <div className="App">
    <div className="wrapper">
    <Hero/>
    <div className="botones">
    <button className="custom-btn1"
    onClick={() => setShowEducation(true)}>{t("education")}</button>
    <button className="custom-btn2"
    onClick={() => setShowEducation(false)}>{t("experience")}</button>
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
  </div>
  );
}

export default App;

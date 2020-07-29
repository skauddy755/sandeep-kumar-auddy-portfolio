import React from 'react';
import "./components/fi/index";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import AppNavbar from "./components/AppNavbar";
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Educations from './components/Educations';
import Footer from './components/Footer';


function App()
{
  return (
    <div className="App">
      <AppNavbar />
      <div className="main-contents">
        <Homepage />
        <Skills />
        <Projects />
        <Educations />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from './components/About/About';
import './App.css';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project.js';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
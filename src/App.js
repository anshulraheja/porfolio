import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from './components/About/About';
import './App.css';
import Skills from './components/Skills/Skills';
import ImageSlider from './components/Project2/Project2.js';
// import Contact from './components/Contact/Contact';
import { SliderData } from './components/Project2/SliderData';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home />
      <About />
      <Skills /> */}
      <ImageSlider  slides={SliderData} />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
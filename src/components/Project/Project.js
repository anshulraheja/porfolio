import React, { useState } from 'react';
import './Project.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Button } from '../Button';
import { ProjectData } from './ProjectData.js';

const Project = () => {
  const [current, setCurrent] = useState(0);
  const length = ProjectData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ProjectData) || ProjectData.length <= 0) {
    return null;
  }

  return (
    <section className='slider' id="project-section">
        <h2 className='project-title'>projects</h2>
        <div className='slider-content'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        
        {ProjectData.map((slide, index) => {
            return (
            <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
            >
                {index === current && (
                    <>
                    <img src={slide.image} alt='travel' className='image' />
                    <h2>{slide.name}</h2>
                    <p>{slide.description}</p>
                    <Button buttonStyle="btn--live"><a href='/'>Live</a></Button>
                    <Button buttonStyle="btn--viewSource"><a href='/'>View Source</a></Button>
                </>
                )}
            </div>
            );
        })}
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      </div>
    </section>
  );
};

export default Project;
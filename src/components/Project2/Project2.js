import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './Project2.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Button } from '../Button';
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
        <div className='slider-content'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        {SliderData.map((slide, index) => {
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

export default ImageSlider;
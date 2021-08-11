import React, {useState} from 'react'
import './Projects.css';
import {sliderData} from './ProjectData.js';

const Projects = () => {
    const [current ,setCurrent] = useState(0);
    const length = sliderData.length;

    const nextSlide =()=>{
        setCurrent(current === length-1 ? 0 : current + 1);
    }
    
    const prevSlide =()=>{
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(sliderData) || sliderData.length<=0){
        return null;
    }

    return (    
        <section>
            <div className="card">
                <button className="card-button card-button-left" onClick={prevSlide} >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className="card-track-container">
                    <ul  className="card-track">
                        {sliderData.map((slide,index)=>{
                            return (
                                <li className={index === current ? 'card-slide slide active' : 'card-slide slide'} key={index}>
                                   {index === current && (
                                       <img src={slide.image} alt="project" className="card-img"/>
                                   )} 
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <button  className="card-button card-button-right"  onClick={nextSlide}>
                    <i className="fas fa-chevron-right"></i>
                </button>

                {/* <div  className="card-nav">
                    <button className="card-indicator current-slide"></button>
                    <button className="card-indicator"></button>
                    <button className="card-indicator"></button>
                </div> */}
            </div>
        </section>
    )
}
export default Projects

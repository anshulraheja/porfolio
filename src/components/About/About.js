import React from 'react'
import './About.css'
const About = () => {
    return (
        <section>
            <div className="about-container">
                <div className="about-content">
                    <h1>Hello, I'm Anshul</h1>
                    <h2>Web Developer</h2>
                    <p>I've worked at start-ups, tech companies and corporates on a range of different projects, including design systems, websites and apps.</p>
                </div>
                <div className="about-img">
                    <img src="photo.jpg" alt='face' width="300" height="350"></img>
                </div>
            </div>
        </section>
    )
}

export default About

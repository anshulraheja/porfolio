import React from 'react'
import './Home.css'
import { Button } from '../Button.js'
const Home = () => {
    return (
        <section className="home">
            <div className="home-data">
                <h1 className='home-title'>Hi,<br />I'm <span className="home-title-name">Anshul</span><br />&lt; Web Developer /&gt;</h1>
                <Button buttonStyle="btn--contact">Contact</Button>
                <div className="home-social-icon">
                    <a href="/"><i className="fab fa-linkedin"></i></a>
                    <a href="/"><i className="fab fa-github-square"></i></a>
                    <a href="/"><i className="fas fa-code"></i></a>
                </div>
            </div>
            <div>
                <img src="photo.jpg" alt="face" className="home-img" ></img>
            </div>
        </section >
    )
}

export default Home

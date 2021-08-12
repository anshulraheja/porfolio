import React from 'react'
import './Home.css'
import { Button } from '../Button.js'
const Home = () => {
    return (
        <section className="home" id="home-section">
            <div className="home-data">
                <h1 className='home-title'>Hi,<br />I'm <span className="home-title-name">Anshul</span><br />&lt; web developer /&gt;</h1>
                <Button buttonStyle="btn--mail"><a href="mailto:anshul.r1610@gmail.com" target="_blank" rel="noreferrer">e-mail</a> </Button>
                <div className="home-social-icon">
                    <a href="https://www.linkedin.com/in/anshul-raheja/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/anshulraheja" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                    <a href="https://leetcode.com/anshulraheja/" target="_blank" rel="noopener noreferrer"><i className="iconify" data-icon="simple-icons:leetcode"></i></a>
                </div>
            </div>
            <div>
                <img src="web_developer_undraw_1.svg" alt="face" className="home-img" ></img>
            </div>
        </section >
    )
}

export default Home

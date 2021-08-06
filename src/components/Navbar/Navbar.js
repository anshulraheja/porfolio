import React, { useState, useEffect } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {
        showButton();
    }, [])


    const showButton = () => {
        if (window.innerWidth <= 900) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }


    window.addEventListener('resize', showButton);
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo" onClick={closeMobileMenu}>&lt; A &gt;</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} onClick={closeMobileMenu}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {button && <Button buttonStyle='btn--outline'>Resume</Button>}
        </nav>
    )
}

export default Navbar
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link as RouterLink, Navigate } from 'react-router-dom';
import '../../app/App.css';

export default function Navbar() {
    const [ sticky, setSticky ] = useState(false);
    const [ click, setClick ] = useState(false);
    const [ button, setButton ] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);   

    const [ mobileMenu, setMobileMenu ] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    window.addEventListener("resize", showButton);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img className="logo" src="../../../../../public/images/icon.png" alt="Avatar"/>
            <ul className={ mobileMenu ? '' : 'hide-mobile-menu' }>
                <li>
                    <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                        Home
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="what-we-do-container" smooth={true} offset={-220} duration={500}> 
                        What we do
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="aboutUs" smooth={true} offset={-180} duration={500}>
                        About us
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="contact-us" smooth={true} offset={-250} duration={500}>
                        Contact us
                    </ScrollLink>
                </li>
                <li>                    
                    <button className="btn">
                        <RouterLink to="/login" >Login</RouterLink>
                    </button>
                </li>
            </ul>
            <img src="../../../../../public/images/menu-icon.png" alt="" className="menu-icon" onClick={toggleMenu}></img>
            {/* Add Menu items className='menu-icon' */}
        </nav>	
    );
}
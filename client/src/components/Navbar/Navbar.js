import React, { useState, useEffect } from "react";
import { Link, Element } from 'react-scroll';
import './Navbar.css';

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

    window.addEventListener("resize", showButton);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img className="logo" src="../../../../../public/images/icon.png" alt="Avatar"/>
            <ul>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="what-we-do-container" smooth={true} offset={-220} duration={500}> 
                        What we do
                    </Link>
                </li>
                <li>
                    <Link to="aboutUs" smooth={true} offset={-180} duration={500}>
                        About us
                    </Link>
                </li>
                <li>
                    <Link to="contact-us" smooth={true} offset={-250} duration={500}>
                        Contact us
                    </Link>
                </li>
                {/* <li>
                    <Link to="resources-container" smooth={true} offset={-150} duration={500}>
                        Resources
                    </Link>
                </li> */}
                <li>
                    <Link to="contact-us" smooth={true} offset={-250} duration={500}>
                        <button className="btn">Login</button>
                    </Link>
                </li>

                {/* <li className="nav-item">
                    <Link to="/contactUs" className="nav-links" onClick={closeMobileMenu}>
                    Sign Up
                    </Link>
                </li> */}
            </ul>
        </nav>	
    );
}
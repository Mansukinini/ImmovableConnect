import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-inner section-inner'>
                <div className='footer-brand'>
                    <img
                        className='footer-logo-img'
                        src="/public/images/icon.png"
                        alt="Immovable Connect"
                    />
                    <div>
                        <span className='footer-logo'>Immovable Connect</span>
                        <p>Fostering Christ-centered connections &amp; maturity.</p>
                    </div>
                </div>

                <nav className='footer-links'>
                    <ScrollLink to="hero" smooth={true} offset={-70} duration={500}>Home</ScrollLink>
                    <ScrollLink to="what-we-do-container" smooth={true} offset={-70} duration={500}>What we do</ScrollLink>
                    <ScrollLink to="about-us" smooth={true} offset={-70} duration={500}>Departments</ScrollLink>
                    <ScrollLink to="contact-us" smooth={true} offset={-70} duration={500}>Contact</ScrollLink>
                </nav>
            </div>

            <div className='footer-bottom'>
                <span>&copy; {new Date().getFullYear()} Immovable Connect. All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer

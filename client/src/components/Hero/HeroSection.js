import React from 'react';
import { Link, Element } from 'react-scroll';
import './HeroSection.css';

function HeroSection() {
    return (
        <Element name="hero" className='hero'>
            <div className='hero-inner'>
                <div className='hero-text'>
                    <span className='hero-eyebrow'>Immovables Connect</span>
                    <h1>Fostering Christ&#8209;centered connections &amp; maturity</h1>
                    <p>
                        An online Connect community of young people and young adults meeting
                        weekly to grow together in faith, prayer and Christ&#8209;like maturity.
                    </p>
                    <Link to="what-we-do-container" smooth={true} offset={-90} duration={500}>
                        <button className='btn'>Get Involved</button>
                    </Link>
                </div>
                <div className='hero-image'>
                    <img src="/public/images/img-home.jpg" alt="Immovables Connect community" />
                </div>
            </div>

            <div className='hero-band'>
                <div className='hero-band-inner'>
                    <p>
                        <strong>Weekly Connect &mdash;</strong> Tuesdays 8&ndash;9pm via Google Meet
                    </p>
                    <Link to="contact-us" smooth={true} offset={-70} duration={500}>
                        <button className='btn'>Join Us</button>
                    </Link>
                </div>
            </div>
        </Element>
    );
}

export default HeroSection

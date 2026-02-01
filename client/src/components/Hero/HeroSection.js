import React from 'react';
import { Link, Element } from 'react-scroll';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>Immovable Connect</h1>
                <p>Fostering Christ Centered Connections and Maturity</p>
                {/* <button className='btn'>GET INVOLVED</button> */}
                <Link to="what-we-do-container" smooth={true} offset={-250} duration={500}>
                    <button className='btn'>GET INVOLVED</button>
                </Link>                
            </div>
        </div>
    );
}

export default HeroSection

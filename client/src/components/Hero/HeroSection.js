import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero'>
            <div className='hero-text'>
                {/* <video src="../../../public/videos/video-2.mp4" autoPlay loop muted /> */}
                <h1>Immovable Connect</h1>
                <p>Fostering Christ Centered Connections and Maturity</p>
                <button className='btn'>GET INVOLVED</button>                
            </div>
        </div>
    );
}

export default HeroSection

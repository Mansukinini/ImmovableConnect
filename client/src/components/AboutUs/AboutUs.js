import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <>
            <div name='aboutUs' className='about-us-container'>
                <div className='what-we-are-right'>
                    <p>We are a team of passionate individuals dedicated to making a difference in the world.</p>
                    <p>Our mission is to provide innovative solutions that empower people and organizations to achieve their goals.</p>
                    <p>We believe in the power of collaboration and strive to create a positive impact in everything we do.</p>
                </div>
            </div>
            <div className='card-container'>
                <div className="card">
                    <div className="card-header">
                        <img src="../../../public/images/img-1.jpg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src="../../../public/images/img-2.jpg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src="../../../public/images/img-3.jpg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src="../../../public/images/img-4.jpg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs

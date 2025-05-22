import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <>
            {/* <div name='aboutUs' className='about-us-container'>
                <div className='what-we-are-right'>
                    <p>We are a team of passionate individuals dedicated to making a difference in the world.</p>
                    <p>Our mission is to provide innovative solutions that empower people and organizations to achieve their goals.</p>
                    <p>We believe in the power of collaboration and strive to create a positive impact in everything we do.</p>
                </div>
            </div> */}
            <div name='aboutUs' className='card-container'>               
                <div className="card">
                    <div className="card-header">
                        <img src="../../../public/images/icon.png" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">ACCOUNTABILITY AND GROWTH - Brother KG</h5>
                            <p className="card-text">We require suitable reflection of the content delivered in the cell 
                                group and engagement of the rest of cell concerning spiritual growth. This comprises coming 
                                up with homeworks, arranging rosters for weekly encouragement from leaders and keeping the 
                                WhatsApp group active.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src="../../../public/images/icon.png" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">TREASURY - Sis Monique</h5>
                            <p className="card-text">
                                We require the Cell to have a mini account where we make monthly contributions as Leaders 
                                and anyone who wants to help the Cell financially can as well. This will be used for any 
                                Cell activities, helping the poor or any member in the Cell should they require the funds.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div> 
                <div className="card">
                    <div className="card-header">
                        <img src="../../../public/images/icon.png" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">3. EVENTS AND PROGRAM - Tshwazi</h5>
                            <p className="card-text">
                                We require events of the cell group to consolidated from planning by leaders, and program to be 
                                drawn and understood. This includes keeping the cell group notified about what to come, inviting 
                                speakers and execution of activities.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>                
            </div>
            <div className='card-container'>                
                <div className="card">
                    <div className="card-header">
                        <img src="../../../public/images/icon.png" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">INTERCESSION - Sis Tiisi</h5>
                            <p className="card-text">
                                We require fervent prayer sessions during the cell group time and among leaders. This 
                                includes praying upon prayer requests and following up on the progress of those prayer 
                                requests.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src="../../../public/images/icon.png" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">FOLLOW UP Brother Evans.</h5>
                            <p className="card-text">
                                We require every member of our Cell Group to be checked up upon especially when they do not 
                                pitch up for our sessions. This includes messaging them and giving us feedback</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src="../../../public/images/icon.png" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">SECRETARIAL - Sis Rendalz</h5>
                            <p className="card-text">
                                Here we require all the meetings to be minuted and sent to us or cell group via a 
                                word document. This is to have a record of activities taking place.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs

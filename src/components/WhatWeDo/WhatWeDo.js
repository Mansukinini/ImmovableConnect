import React from 'react';
import './WhatWeDo.css'

function WhatWeDo() {
    return (
        <>
            <div className='what-we-do-container'>
                <div className='what-we-do-left'>
                    <img src='../../../public/images/img-8.jpg' alt='What We Do'/>
                </div>
                <div className='what-we-do-right'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially 
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.</p>
                </div>
            </div>  
            <div className="weekly-meeting-container">
                <h2>Weekly Meetings</h2>
                <div className="card-item-container">
                    {/* <div className="card">
                        <div className="card-header">
                            <img src="../../../public/images/img-1.jpg" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="card">
                        <div className="card-header">
                            <img src="../../../public/images/img-2.jpg" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="card">
                        <div className="card-header">
                            <img src="../../../public/images/img-3.jpg" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>                
                    </div> */}
                    {/* <div className="card">
                        <div className="card-header">
                            <img src="../../../public/images/img-4.jpg" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </>        
    );
}

export default WhatWeDo
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import Title from "../components/Title/Title";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import AboutUs from "../components/about-us/AboutUs";
import ContactUs from "../components/contact-us/ContactUs";
import Resources from "../components/Resources/Resources";
import Footer from "../components/footer/Footer";
import './App.css';

function App() {
    return (
        // <div>
        <Router>
            <Navbar/>
            <HeroSection/>
            <div className="container">
                <Title title='What we do'/>
                <WhatWeDo/>
                <Title title='About Us'/>
                <AboutUs/>                
                <Title title='Contact us'/>
                <ContactUs/>
                {/* <Title title='Resource'/>
                <Resources/>  */}
            </div>
            <Footer/>
            <Routes>

            </Routes>
        </Router>
            
        // </div>
    );   
}

export default App;

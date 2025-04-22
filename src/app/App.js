import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import Title from "../components/Title/Title";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Resources from "../components/Resources/Resources";
import Footer from "../components/Footer/Footer";
import './App.css';

function App() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <div className="container">
                <Title title='What we do'/>
                <WhatWeDo/>
                <Title title='About Us'/>
                <AboutUs/>
                <Title title='Resource'/>
                <Resources/>                
                <Title title='Contact us'/>
                <ContactUs/> 
            </div>
            <Footer/>
        </div>
    );   
}

export default App;

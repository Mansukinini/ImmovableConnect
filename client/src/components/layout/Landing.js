import React from "react";
import HeroSection from "../Hero/HeroSection";
import Title from "../Title/Title";
import WhatWeDo from "../what-we-do/WhatWeDo";
import AboutUs from "../about-us/AboutUs";
import ContactUs from "../contact-us/ContactUs";
import Footer from "../footer/Footer";
import '../../app/App.css';

export default function Landing() {
    return (
        <section className="landing">
            <HeroSection/>
            <div className="landing-container">
                <Title title='What we do'/>
                <WhatWeDo/>
                <Title title='Departments'/>
                <AboutUs/>                
                <Title title='Contact us'/>
                <ContactUs/>
            </div>
            <Footer/>        
        </section>
    );
}
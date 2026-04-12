import React from "react";
import HeroSection from "../hero/HeroSection";
import Title from "../Title/Title";
import WhatWeDo from "../what-we-do/WhatWeDo";
import AboutUs from "../about-us/AboutUs";
import ContactUs from "../contact-us/ContactUs";
import Footer from "../footer/Footer";

export default function Landing() {
    return (
        <section className="landing">
            <HeroSection/>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <Title title='What we do'/>
                <WhatWeDo/>
                <Title title='About Us'/>
                <AboutUs/>                
                <Title title='Contact us'/>
                <ContactUs/>
            </div>
            <Footer/>        
        </section>
    );
}
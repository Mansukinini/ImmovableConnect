import React from "react";
import HeroSection from "../Hero/HeroSection";
import Title from "../Title/Title";
import WhatWeDo from "../what-we-do/WhatWeDo";
import AboutUs from "../about-us/AboutUs";
import ContactUs from "../contact-us/ContactUs";

export default function Landing() {
    return (
        <section className="landing">
            <HeroSection/>
            <Title title='What we do'/>
            <WhatWeDo/>
            <Title title='About Us'/>
            <AboutUs/>                
            <Title title='Contact us'/>
            <ContactUs/>
            {/* <Footer/>         */}
        </section>
    );
}
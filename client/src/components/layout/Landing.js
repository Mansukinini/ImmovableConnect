import React from "react";
import HeroSection from "../Hero/HeroSection";
import Title from "../Title/Title";
import WhatWeDo from "../what-we-do/WhatWeDo";
import Schedule from "../Schedule/Schedule";
import AboutUs from "../about-us/AboutUs";
import ContactUs from "../contact-us/ContactUs";
import Footer from "../Footer/Footer";
import '../../app/App.css';

export default function Landing() {
    return (
        <section className="landing">
            <HeroSection />
            <WhatWeDo />
            <Schedule />
            <div className="departments-section section-inner">
                <Title
                    eyebrow="How we serve"
                    title="Departments"
                />
                <AboutUs />
            </div>
            <ContactUs />
            <Footer />
        </section>
    );
}

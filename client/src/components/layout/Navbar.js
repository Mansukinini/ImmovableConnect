import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../../app/App.css';

export default function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const onScroll = () => setSticky(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleMenu = () => setMobileMenu((open) => !open);
    const closeMenu = () => setMobileMenu(false);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <ScrollLink to="hero" smooth={true} offset={-70} duration={500} className="nav-brand">
                <img className="logo" src="/public/images/icon.png" alt="Immovable Connect" />
                <span className="nav-brand-name">Immovable Connect</span>
            </ScrollLink>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li onClick={closeMenu}>
                    <ScrollLink to="hero" smooth={true} offset={-70} duration={500}>
                        Home
                    </ScrollLink>
                </li>
                <li onClick={closeMenu}>
                    <ScrollLink to="what-we-do-container" smooth={true} offset={-80} duration={500}>
                        What we do
                    </ScrollLink>
                </li>
                <li onClick={closeMenu}>
                    <ScrollLink to="about-us" smooth={true} offset={-80} duration={500}>
                        Departments
                    </ScrollLink>
                </li>
                <li onClick={closeMenu}>
                    <ScrollLink to="contact-us" smooth={true} offset={-70} duration={500}>
                        Contact us
                    </ScrollLink>
                </li>
                <li onClick={closeMenu}>
                    <RouterLink to="/login">
                        <button className="btn">Login</button>
                    </RouterLink>
                </li>
            </ul>
            <img
                src="/public/images/menu-icon.png"
                alt="Menu"
                className="menu-icon"
                onClick={toggleMenu}
            />
        </nav>
    );
}
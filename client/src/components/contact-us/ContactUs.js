import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './ContactUs.css';

function ContactUs() {
    const [result, setResult] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setResult("");

        const formData = new FormData(event.target);
        formData.append("access_key", process.env.WEB3FORMS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            setResult(data.success ? "Message sent! We'll be in touch soon." : "Something went wrong. Please try again.");
            if (data.success) event.target.reset();
        } catch {
            setResult("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Element name="contact-us" className='contact-us'>
            <div className='contact-us-inner section-inner'>
                <div className='contact-us-col contact-us-info'>
                    <span className='contact-eyebrow'>Get in touch</span>
                    <h3>Join the Connect</h3>
                    <p>
                        Feel free to reach out through the form or the details below. Your
                        questions, feedback and prayer requests matter to us as we grow together
                        in faith.
                    </p>
                    <ul className='contact-us-list'>
                        <li><i className="fas fa-envelope" /> Immovablesc@immovablesconnect.com</li>
                        <li><i className="fas fa-phone-alt" /> +27 79 252 7725</li>
                        <li><i className="fas fa-map-marker-alt" /> Cape Town (Online)</li>
                    </ul>
                    <div className='contact-socials'>
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                        <a href="#" aria-label="X"><i className="fab fa-twitter" /></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                        <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
                    </div>
                </div>
                <div className='contact-us-col'>
                    <form className='contact-us-form' onSubmit={onSubmit} method="POST">
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" placeholder='Type your name...' required />
                        <label htmlFor="phone">Phone number</label>
                        <input type="tel" id="phone" name="phone" placeholder='Type your mobile number...' required />
                        <label htmlFor="message">Write your message here</label>
                        <textarea id="message" name="message" rows='5' placeholder='Type your message here...' required></textarea>
                        <button type="submit" className='btn dark-btn' disabled={submitting}>
                            {submitting ? 'Sending...' : 'Sign up now'}
                        </button>
                        {result && <span className='result'>{result}</span>}
                    </form>
                </div>
            </div>
        </Element>
    );
}

export default ContactUs;

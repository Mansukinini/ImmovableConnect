import React, { useState } from 'react';
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
        <div className='contact-us'>
            <div className='contact-us-col'>
                <h3>Send us a message</h3>
                <p>Feel free to reach out through the contact form or find our contact
                    information below. Your feedback, questions and suggestions are
                    important to us as we strive to help each other grow in faith.
                </p>
                <div>
                    <ul className='contact-us-list'>
                        <li>Immovablesc@immovablesconnect.com</li>
                        <li>+27 79 252 7725</li>
                        <li>Cape Town (Online)</li>
                    </ul>
                </div>
            </div>
            <div className='contact-us-col'>
                <form className='contact-us-form' onSubmit={onSubmit} method="POST">
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" placeholder='Type your name...' required />
                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" id="phone" name="phone" placeholder='Type your mobile number...' required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea id="message" name="message" rows='6' placeholder='Type your message here...' required></textarea>
                    <button type="submit" className='btn dark-btn' disabled={submitting}>
                        {submitting ? 'Sending...' : 'Submit now'}
                    </button>
                </form>
                {result && <span className='result'>{result}</span>}
            </div>
        </div>
    );
}

export default ContactUs;

import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className='contact-us'>
            <div className='contact-us-col'>
                <h3>Send us a message</h3>
                <p>Feel free to reach out through contact from or find our contact
                    information below. Your feedback, question and suggestion are
                    important to us as we strive to help you for us to grow together
                    in our faith.
                </p>
                <ul className='contact-us-list'>
                    <li>Immovablesc@immovablesconnect.com</li>
                    <li>+27 79 252 7725</li>
                    <li>Cape Town (Online)</li>
                </ul>
            </div>
            <div className='contact-us-col'>
                <form>
                    <label>Your name</label>
                    <input type="text" id="name" name="name" placeholder='Type your name...' required/>
                    <label >Phone number</label>
                    <input type="tel" name="phone" placeholder='Type your mobile number...' required/>
                    <label >Write your message here</label>                    
                    <textarea id="message" name="message" rows='6' placeholder='Type your message here...' required></textarea>
                    <button type="submit" className='btn dark-btn'>Submit now</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs

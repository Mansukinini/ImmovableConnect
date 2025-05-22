import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <button buttonStyle='btn--outline'>Subscribe</button>
                    </form>
                </div>
            </section> */}
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        {/* <Link to='/' className='social-logo'> */}
                            Immovable Connect
                        {/* </Link> */}
                    </div>
                    {/* <small className='website-rights'>TRVL © 2020</small> */}
                    {/* <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'>
                            <i className='fab fa-facebook-f'/>
                        </Link>
                        <Link className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'>
                            <i className='fab fa-youtube' />
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Footer

import React from 'react';
import ContactSubmissions from './ContactSubmissions';



const ContactAddress = () => {
    
    return (
        <div className="contact-section-title ptb-100">
            <div className="container">
                <ContactSubmissions />
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="contact-content">
                            <div className="sub-title-2">
                                <p>Contact Us</p>
                            </div>
                            <h2>Let’s Start Working Together. Get in Touch</h2>
                            <p>Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-info">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="contact-info-box">
                                        <i className="fi fi-tr-phone-call" />
                                        <h4><a href="tel:+919257889888">+91 92578 89888</a></h4>
                                        <span>Phone</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="contact-info-box">
                                        <i className="fi fi-tr-envelope-dot" />
                                        <h4><a href="mailto:contactus@palenable.com">contactus@palenable.com</a></h4>
                                        <span>Email</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ContactAddress
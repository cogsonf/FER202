import React, { useState } from 'react';
import '../css/contact.css';
import Header from './Header';
import Footer from './Footer';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
        <Header/>
        <div>
        
            {/* Banner riêng biệt */}
            <div className="contact-banner-container">
                <img src="./images/ban.png" alt="Contact Us Banner" className="contact-banner" />
            </div>

            {/* Container hiển thị thông tin và form */}
            <div className="contact-content">
                {/* Thông tin về trang web */}
                <div className="contact-info">
                    <h2>About Our Ticketing Service</h2>
                    <p>Welcome to Contic! We specialize in providing tickets for a wide variety of music events, from intimate concerts to large-scale music festivals. Our mission is to connect music lovers with unforgettable live music experiences. Explore our platform, find tickets to your favorite events, and be a part of the music!</p>
                    <p>Have questions? Feel free to reach out using the contact form. We’re here to assist you with any inquiries, ticket details, or support you might need. Let's make your event experience seamless and memorable!</p>
                </div>

                {/* Form liên hệ */}
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    {submitted ? (
                        <p>Thank you for contacting us! We'll get back to you soon.</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    )}
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
    );
};

export default Contact;

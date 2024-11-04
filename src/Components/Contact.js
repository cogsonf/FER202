import React, { useState } from 'react';

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

    const styles = {
        contactContent: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2rem',
            background: 'linear-gradient(135deg, #f0f5ff, #e6effa)',
            borderRadius: '15px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            color: '#333',
        },
        contactInfoHeader: {
            color: '#0056b3',
            fontWeight: '700',
            fontSize: '1.8rem',
            letterSpacing: '0.5px',
            marginBottom: '1rem',
            textAlign: 'center',
        },
        contactInfoText: {
            color: '#555',
            lineHeight: '1.8',
            fontSize: '1rem',
            textAlign: 'center',
            marginBottom: '1rem',
        },
        googleMap: {
            flex: '1',
            marginRight: '1rem',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        },
        contactForm: {
            flex: '1',
            padding: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '15px',
            marginLeft: '1rem',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        },
        formGroup: {
            marginBottom: '1.5rem',
        },
        formLabel: {
            display: 'block',
            color: '#333',
            fontWeight: '600',
            marginBottom: '0.5rem',
        },
        formInput: {
            width: '100%',
            padding: '0.75rem',
            border: '2px solid #cbd3ff',
            borderRadius: '8px',
            outline: 'none',
            fontSize: '1rem',
        },
        submitBtn: {
            padding: '0.75rem 2rem',
            border: 'none',
            background: 'linear-gradient(135deg, #ff8a00, #e52e71)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: '8px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={{ backgroundColor: 'rgb(42, 45, 52)', minHeight: '100vh', color: 'white' }}>
        <div>
            <Header />
        </div>

            <div style={{backgroundColor:  'white' }} >
                <div style={styles.contactInfoText}>
                    <h2 style={styles.contactInfoHeader}>About Our Ticketing Service</h2>
                    <p>Welcome to Contic! We specialize in providing tickets for a wide variety of music events, from intimate concerts to large-scale music festivals. Our mission is to connect music lovers with unforgettable live music experiences. Explore our platform, find tickets to your favorite events, and be a part of the music!</p>
                    <p>Have questions? Feel free to reach out using the contact form. We’re here to assist you with any inquiries, ticket details, or support you might need. Let's make your event experience seamless and memorable!</p>
                </div>

                <div style={styles.contactContent}>
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1676821346526!2d108.23958821430427!3d16.0532208882268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c0ff6c24c7%3A0x3b78d2e24538215f!2sKhu%20%C4%90%C3%B4%20Th%E1%BB%8B%20FPT%20%C4%90%C3%A0%20N%E1%BA%B9ng!5e0!3m2!1sen!2s!4v1699091881335!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={styles.googleMap}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                    <div style={styles.contactForm}>
                        <h2>Contact Us</h2>
                        {submitted ? (
                            <p>Thank you for contacting us! We'll get back to you soon.</p>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div style={styles.formGroup}>
                                    <label htmlFor="name" style={styles.formLabel}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        style={styles.formInput}
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label htmlFor="email" style={styles.formLabel}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        style={styles.formInput}
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label htmlFor="message" style={styles.formLabel}>Message</label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        style={{ ...styles.formInput, resize: 'vertical', minHeight: '120px' }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={styles.submitBtn}
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <div>
           <Footer/>
           </div>
        </div>
    );
};

export default Contact;

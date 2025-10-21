import React, { useState } from 'react';
import AnimatedMushroom from './AnimatedMushroom';
import logoImage from '../assets/logo.png';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact parallax">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info fade-in-left">
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-subtitle">
              Ready to order fresh mushrooms or have any questions? 
              We'd love to hear from you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item scale-in">
                <div className="contact-icon">
                  <div className="mushroom-icon float"></div>
                </div>
                <div className="contact-text">
                  <h3>Location</h3>
                  <p>Peralassery, Kannur, Kerala </p>
                </div>
              </div>
              
              <div className="contact-item scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="contact-icon">
                  <div className="mushroom-icon float"></div>
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>+91 7012892552</p>
                </div>
              </div>
              
              <div className="contact-item scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="contact-icon">
                  <div className="mushroom-icon float"></div>
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>ecomush.business@gmailcom.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container fade-in-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="contact-footer fade-in-up">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logoImage} alt="Eco Mush Logo" className="footer-logo-image" />
             
            </div>
            <p className="footer-tagline">Pure by Nature. Fresh by Choice.</p>
            <p className="footer-copyright">
              © 2024 Eco Mush. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Animated Mushrooms */}
      <AnimatedMushroom size="small" delay={0} position="top-left" />
      <AnimatedMushroom size="medium" delay={1} position="top-right" />
      <AnimatedMushroom size="large" delay={2} position="center-left" />
      <AnimatedMushroom size="small" delay={3} position="center-right" />
      <AnimatedMushroom size="medium" delay={4} position="bottom-left" />
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AnimatedMushroom from './AnimatedMushroom';
import logoImage from '../assets/logo.png';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

const ContactItem = ({ icon, title, text, index }) => {
  const [itemRef, itemVisible] = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      ref={itemRef}
      className={`contact-item scale-in ${itemVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="contact-icon">
        {icon}
      </div>
      <div className="contact-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [infoRef, infoVisible] = useScrollAnimation({ threshold: 0.2 });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.2 });
  const [footerRef, footerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scrollToHome = () => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById('home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const phoneNumber = '919895052552'; // WhatsApp number: +91 9895052552
    const message = `*Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n\n` +
      `*Message:*\n${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert('Opening WhatsApp to send your message. Please send it to contact us.');
    
    // Clear form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="contact parallax">
      <div className="container">
        <div className="contact-content">
          <div 
            ref={infoRef}
            className={`contact-info fade-in-left ${infoVisible ? 'visible' : ''}`}
          >
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-subtitle">
              Ready to order fresh mushrooms or have any questions? 
              We'd love to hear from you!
            </p>
            
            <div className="contact-details">
              <ContactItem 
                icon={<div className="mushroom-icon float"></div>}
                title="Location"
                text="Peralassery, Kannur, Kerala"
                index={0}
              />
              <ContactItem 
                icon={<div className="mushroom-icon float"></div>}
                title="Phone"
                text="+91 9895052552"
                index={1}
              />
              <ContactItem 
                icon={<div className="mushroom-icon float"></div>}
                title="Email"
                text="info@ecomush.in"
                index={2}
              />
            </div>
          </div>
          
          <div 
            ref={formRef}
            className={`contact-form-container fade-in-right ${formVisible ? 'visible' : ''}`}
          >
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
        
        <div 
          ref={footerRef}
          className={`contact-footer fade-in-up ${footerVisible ? 'visible' : ''}`}
        >
          <div className="footer-content">
            <div className="footer-logo" onClick={scrollToHome} style={{ cursor: 'pointer' }}>
              <img src={logoImage} alt="Eco Mush Logo" className="footer-logo-image" />
             
            </div>
            <p className="footer-tagline">Pure by Nature. Fresh by Choice.</p>
            
            {/* Footer Social Media Icons */}
            <div className="footer-social-icons">
              <a 
                href="https://www.instagram.com/ecomush.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Instagram"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61583044371840" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Facebook"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/ecomush" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            
            <p className="footer-copyright">
              © 2025 Eco Mush. All rights reserved.
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

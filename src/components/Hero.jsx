import React from 'react';
import heroImage from '../assets/Hero.png';
import AnimatedMushroom from './AnimatedMushroom';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero parallax">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image-container fade-in-up">
            <img src={heroImage} alt="Eco Mush Hero" className="hero-image" />
          </div>
          <div className="hero-button-container scale-in">
            <button 
              className="btn hero-btn"
              onClick={() => scrollToSection('products')}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated Mushrooms */}
      <AnimatedMushroom size="small" delay={0} position="top-left" />
      <AnimatedMushroom size="medium" delay={1} position="top-right" />
      <AnimatedMushroom size="small" delay={2} position="center-left" />
      <AnimatedMushroom size="large" delay={3} position="center-right" />
      <AnimatedMushroom size="medium" delay={4} position="bottom-left" />
      <AnimatedMushroom size="small" delay={5} position="bottom-right" />
    </section>
  );
};

export default Hero;

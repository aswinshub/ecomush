import React, { useState } from 'react';
import logoImage from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <img src={logoImage} alt="Eco Mush Logo" className="logo-image" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <ul className="nav-list">
              <li>
                <button 
                  className="nav-link"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className="nav-link"
                  onClick={() => scrollToSection('about')}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  className="nav-link"
                  onClick={() => scrollToSection('products')}
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  className="nav-link"
                  onClick={() => scrollToSection('recipes')}
                >
                  Mushroom Recipes
                </button>
              </li>
              <li>
                <button 
                  className="nav-link"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact us
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li>
              <button 
                className="mobile-nav-link"
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className="mobile-nav-link"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button 
                className="mobile-nav-link"
                onClick={() => scrollToSection('products')}
              >
                Products
              </button>
            </li>
            <li>
              <button 
                className="mobile-nav-link"
                onClick={() => scrollToSection('recipes')}
              >
                Mushroom Recipes
              </button>
            </li>
            <li>
              <button 
                className="mobile-nav-link"
                onClick={() => scrollToSection('contact')}
              >
                Contact us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

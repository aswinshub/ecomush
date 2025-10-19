import React from 'react';
import logoImage from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

          {/* Navigation */}
          <nav className="nav">
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
        </div>
      </div>
    </header>
  );
};

export default Header;

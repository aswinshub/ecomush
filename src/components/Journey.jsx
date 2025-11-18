import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Journey.css';

const Journey = () => {
  const [profileRef, profileVisible] = useScrollAnimation({ threshold: 0.2 });
  const [storyRef, storyVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="journey" className="journey">
      <div className="container">
        <div className="journey-content">
          <div className="profile-section">
            <div 
              ref={profileRef}
              className={`profile-container zoom-in ${profileVisible ? 'visible' : ''}`}
            >
              <img src="https://res.cloudinary.com/do3ps47zs/image/upload/v1760780423/profile_how1f7.png" alt="Aswin Chandran" className="profile-image" />
            </div>
          </div>
          
          <div 
            ref={storyRef}
            className={`story-section fade-in-right ${storyVisible ? 'visible' : ''}`}
          >
            <h2 className="story-title">
              Techie to Farming : The Journey Behind ecomush
            </h2>
            <div className="story-description">
              <p>
              EcoMush didn’t just start as a business — it grew from a dream shaped by passion, creativity, and purpose.
I began my career as a software developer, later discovering a deep love for UI/UX design.
Even while working full-time, I kept learning and growing creatively.
During work-from-home days, I used my free time to start a freelance design studio.
Working with clients taught me how brands are built and how stories shape identity.
This journey pushed me to create something meaningful and health-focused.
My research led me to the world of mushroom farming — sustainable, nutritious, and planet-friendly.
Mushrooms aligned with my belief: health should be a routine, not an option.
Combining my design passion, technical discipline, and love for wellness, EcoMush was born.
Today, EcoMush is dedicated to bringing clean, fresh, protein-rich mushrooms to every home.
              </p>
            </div>
            <div className="author-info">
              <h3 className="author-name">ASWIN CHANDRAN</h3>
              <p className="author-title">Founder, Eco Mush</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

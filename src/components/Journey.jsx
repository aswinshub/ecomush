import React from 'react';
import './Journey.css';

const Journey = () => {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <div className="journey-content">
          <div className="profile-section">
            <div className="profile-container">
              <div className="profile-pattern"></div>
              <img src="https://res.cloudinary.com/do3ps47zs/image/upload/v1760780423/profile_how1f7.png" alt="Aswin Chandran" className="profile-image" />
            </div>
          </div>
          
          <div className="story-section">
            <h2 className="story-title">
              Techie to Farming : The Journey Behind ecomush
            </h2>
            <div className="story-description">
              <p>
                I began my career as a software developer, deeply rooted in technology and problem-solving. 
                During the work-from-home phase of my job, I started reflecting on creating something of my own, 
                and that curiosity led me to explore mushroom farming. My passion for sustainability and healthy 
                living inspired me to take this new path, and the idea of providing people with fresh, high-quality 
                food motivated me even more. This journey from coding to cultivation gave birth to Eco Mush, a 
                startup built on eco-friendly and organic practices. It reflects my adaptability, innovation, and 
                vision to bring healthy, sustainable produce to the community through modern, high-tech farming.
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

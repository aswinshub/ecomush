import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about parallax">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in-left">
            <h2 >Ecomush : The Fresh Mashrooms <br />in Kerala</h2>
            <h3 ></h3>
            <div className="about-description">
              <p>
                We are passionate about bringing you the freshest, most nutritious mushrooms 
                grown naturally in the pristine environment of Kerala. Our commitment to 
                organic farming practices ensures that every mushroom we deliver is pure, 
                fresh, and packed with natural goodness.
              </p>
              <p>
                Founded with a vision to promote healthy living through natural, organic 
                produce, Eco Mush has been cultivating premium quality mushrooms using 
                sustainable farming methods. Our state-of-the-art facilities combined 
                with traditional farming wisdom create the perfect environment for 
                growing exceptional mushrooms.
              </p>
            </div>
            
            <div className="features">
              <div className="feature scale-in">
                <div className="feature-icon">
                  <div className="mushroom-icon float"></div>
                </div>
                <h3>100% Organic</h3>
                <p>Grown without harmful pesticides or chemicals</p>
              </div>
              
              <div className="feature scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="feature-icon">
                  <div className="mushroom-icon float"></div>
                </div>
                <h3>Fresh Daily</h3>
                <p>Harvested fresh every day for maximum nutrition</p>
              </div>
              
              <div className="feature scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="feature-icon">
                  <div className="mushroom-icon float"></div>
                </div>
                <h3>Local Grown</h3>
                <p>Cultivated in Kerala's natural environment</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual fade-in-right">
            <div className="bed-container">
              <img src="https://res.cloudinary.com/do3ps47zs/image/upload/v1760783197/iPhone_16_Pro_-_2_amkjff.png" alt="Mushroom Bed" className="bed-image" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;

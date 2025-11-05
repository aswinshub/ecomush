import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.2 });
  const [visualRef, visualVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="about parallax">
      <div className="container">
        <div className="about-content">
          <div 
            ref={textRef}
            className={`about-text fade-in-left ${textVisible ? 'visible' : ''}`}
          >
            <h2 >Ecomush : The Fresh Mushrooms<br />in Kerala</h2>
            <h3 ></h3>
            <div className="about-description">
              <p>
                We are passionate about bringing you the freshest, most nutritious mushrooms 
                grown naturally in the pristine environment of Kerala. Our commitment to 
                organic farming practices ensures that every mushroom we deliver is pure, 
                fresh, and packed with natural goodness.,
              </p>
              <p>
                Founded with a vision to promote healthy living through natural, organic 
                produce, Eco Mush has been cultivating premium quality mushrooms using 
                sustainable farming methods. Our state-of-the-art facilities combined 
                with traditional farming wisdom create the perfect environment for 
                growing exceptional mushrooms.
              </p>
            </div>
            
          </div>
          
          <div 
            ref={visualRef}
            className={`about-visual fade-in-right ${visualVisible ? 'visible' : ''}`}
          >
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

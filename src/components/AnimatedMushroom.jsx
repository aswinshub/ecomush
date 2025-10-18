import React from 'react';
import './AnimatedMushroom.css';

const AnimatedMushroom = ({ size = 'medium', delay = 0, position = 'random' }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'mushroom-small';
      case 'large': return 'mushroom-large';
      default: return 'mushroom-medium';
    }
  };

  const getPositionStyle = () => {
    const positions = {
      'top-left': { top: '10%', left: '10%' },
      'top-right': { top: '15%', right: '15%' },
      'bottom-left': { bottom: '20%', left: '20%' },
      'bottom-right': { bottom: '25%', right: '25%' },
      'center-left': { top: '50%', left: '5%', transform: 'translateY(-50%)' },
      'center-right': { top: '50%', right: '5%', transform: 'translateY(-50%)' },
      'random': {
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`
      }
    };
    
    return positions[position] || positions.random;
  };

  return (
    <div 
      className={`animated-mushroom ${getSizeClass()}`}
      style={{
        ...getPositionStyle(),
        animationDelay: `${delay}s`
      }}
    >
      <div className="mushroom-cap"></div>
      <div className="mushroom-stem"></div>
      <div className="mushroom-spots">
        <div className="spot spot-1"></div>
        <div className="spot spot-2"></div>
        <div className="spot spot-3"></div>
      </div>
    </div>
  );
};

export default AnimatedMushroom;

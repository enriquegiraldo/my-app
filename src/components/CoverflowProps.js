import React, { useState } from 'react';
import './Coverflow.css';


import PropTypes from 'prop-types';

function Coverflow({ images, links, type }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={`coverflow coverflow-${type}`}>
      <div className="coverflow-navigation">
        <button 
          onClick={handlePrev} 
          className="coverflow-nav-button coverflow-prev"
        >
          ←
        </button>
        
        <div className="coverflow-images-container">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            const isPrevious = index === (activeIndex > 0 ? activeIndex - 1 : images.length - 1);
            const isNext = index === (activeIndex < images.length - 1 ? activeIndex + 1 : 0);

            return (
              <div 
                key={index}
                className={`coverflow-image-wrapper ${
                  isActive ? 'active' : 
                  isPrevious ? 'previous' : 
                  isNext ? 'next' : ''
                }`}
                onClick={() => handleImageClick(index)}
              >
                <a 
                  href={links[index]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="coverflow-image-link"
                >
                  <img 
                    src={image} 
                    alt={`Coverflow image ${index + 1}`} 
                    className="coverflow-image"
                  />
                </a>
              </div>
            );
          })}
        </div>
        
        <button 
          onClick={handleNext} 
          className="coverflow-nav-button coverflow-next"
        >
          →
        </button>
      </div>
    </div>
  );
}

// Agregamos PropTypes para validación de tipos
Coverflow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.oneOf(['top', 'bottom']).isRequired
};

export default Coverflow;
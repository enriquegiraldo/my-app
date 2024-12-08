import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Coverflow.css';

function Coverflow({ images, links, type = 'top' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Manual navigation methods
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

  // Handle wheel scroll to navigate images
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel);
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`coverflow coverflow-${type}`}
    >
      <div className="coverflow-navigation">
        <button
          className="coverflow-nav-button coverflow-prev"
          onClick={handlePrev}
        >
          ←
        </button>
        <div className="coverflow-images-container">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            const isPrevious = index === (activeIndex > 0 ? activeIndex - 1 : images.length - 1);
            const isNext = index === (activeIndex < images.length - 1 ? activeIndex + 1 : 0);

            return (
              <a
                key={index}
                href={links[index] || '#'}
                className={`coverflow-image-wrapper 
                  ${isActive ? 'active' : ''} 
                  ${isPrevious ? 'previous' : ''} 
                  ${isNext ? 'next' : ''}`}
              >
                <img
                  src={image}
                  alt={`Coverflow image ${index + 1}`}
                  className="coverflow-image"
                />
              </a>
            );
          })}
        </div>
        <button
          className="coverflow-nav-button coverflow-next"
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
}

Coverflow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.oneOf(['top', 'bottom']),
};

export default Coverflow;

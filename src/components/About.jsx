import React, { useState, useEffect, useRef, useCallback } from 'react';
import aboutMeData from '../data/aboutme';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const totalItems = aboutMeData.data.length;

  // Function to go to next slide - wrapped in useCallback
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    setTimeout(() => setIsTransitioning(false), 500); // Match this with your transition duration
  }, [isTransitioning, totalItems]);

  // Function to go to previous slide
  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    setTimeout(() => setIsTransitioning(false), 500); // Match this with your transition duration
  };

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Auto rotate carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [goToNext]); // Now only depends on memoized goToNext function


  // Get current item and neighbors for the 3D effect
  const getCurrentItem = () => aboutMeData.data[currentIndex];
  const getPrevItem = () => aboutMeData.data[(currentIndex - 1 + totalItems) % totalItems];
  const getNextItem = () => aboutMeData.data[(currentIndex + 1) % totalItems];

  return (
    <section id="about" className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{aboutMeData.name}</h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between mt-16">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="transition-all duration-500 ease-in-out">
              <h3 className="text-3xl font-bold text-primary mb-4">{getCurrentItem().name}</h3>
              <p className="text-lg text-text-light mb-10">{getCurrentItem().description}</p>
              
              <div className="flex gap-4">
                <button 
                  onClick={goToPrev} 
                  className="btn btn-secondary flex items-center justify-center"
                  disabled={isTransitioning}
                  aria-label="Previous slide"
                >
                  <FaChevronLeft className="mr-2" /> Previous
                </button>
                <button 
                  onClick={goToNext} 
                  className="btn btn-primary flex items-center justify-center"
                  disabled={isTransitioning}
                  aria-label="Next slide"
                >
                  Next <FaChevronRight className="ml-2" />
                </button>
              </div>
              
              {/* Indicators */}
              <div className="flex justify-center mt-8">
                {aboutMeData.data.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isTransitioning) return;
                      setIsTransitioning(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }}
                    className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* 3D Carousel - Right Side */}
          <div 
            ref={carouselRef}
            className="lg:w-1/2 relative h-[400px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="carousel-container perspective-[1000px] h-full flex items-center justify-center">
              {/* Previous Image (Left) */}
              <div 
                className="absolute transform -translate-x-[60%] scale-75 opacity-40 transition-all duration-500 z-10 hover:opacity-60 cursor-pointer"
                style={{ 
                  transform: `translateX(-60%) rotateY(45deg) scale(0.75)`,
                  filter: 'blur(2px)',
                  animation: isTransitioning ? 'none' : 'slideInFromLeft 0.5s ease-out'
                }}
                onClick={goToPrev}
              >
                <img 
                  src={getPrevItem().image} 
                  alt={getPrevItem().name}
                  className="w-[300px] h-[380px] object-cover rounded-lg shadow-custom-medium"
                />
              </div>
              
              {/* Current Image (Center) */}
              <div 
                className="absolute transform transition-all duration-500 z-20 cursor-pointer"
                style={{ 
                  transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
                  animation: isTransitioning ? 'none' : 'slideInFromCenter 0.5s ease-out'
                }}
              >
                <img 
                  src={getCurrentItem().image} 
                  alt={getCurrentItem().name}
                  className="w-[350px] h-[400px] object-cover rounded-lg shadow-custom-heavy"
                />
              </div>
              
              {/* Next Image (Right) */}
              <div 
                className="absolute transform translate-x-[60%] scale-75 opacity-40 transition-all duration-500 z-10 hover:opacity-60 cursor-pointer"
                style={{ 
                  transform: `translateX(60%) rotateY(-45deg) scale(0.75)`,
                  filter: 'blur(2px)',
                  animation: isTransitioning ? 'none' : 'slideInFromRight 0.5s ease-out'
                }}
                onClick={goToNext}
              >
                <img 
                  src={getNextItem().image} 
                  alt={getNextItem().name}
                  className="w-[300px] h-[380px] object-cover rounded-lg shadow-custom-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
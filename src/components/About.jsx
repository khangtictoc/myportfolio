import React, { useState, useEffect, useRef, useCallback } from 'react';
import aboutMeData from '../data/aboutme';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null); // 'next' or 'prev'
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const totalItems = aboutMeData.data.length;
  
  // Function to go to next slide
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    
    // We'll update the current index after the animation is complete
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      
      // Add a small delay before allowing new transitions
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 500);
  }, [isTransitioning, totalItems]);

  // Function to go to previous slide
  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    
    // We'll update the current index after the animation is complete
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
      
      // Add a small delay before allowing new transitions
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 500);
  }, [isTransitioning, totalItems]);

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
  }, [goToNext]);

  // Helper to get item indices
  const getIndices = () => {
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;
    return { prevIndex, nextIndex };
  };

  // Get animation classes based on position and transition state
  const getAnimationClass = (position) => {
    if (!isTransitioning) {
      // Static positions when not transitioning
      switch (position) {
        case 'prev': return 'carousel-left';
        case 'current': return 'carousel-center';
        case 'next': return 'carousel-right';
        default: return 'carousel-hidden';
      }
    }
    
    // During transition
    if (direction === 'next') {
      // Moving to the next slide
      switch (position) {
        case 'prev': return 'carousel-move-to-left';
        case 'current': return 'carousel-move-to-left';
        case 'next': return 'carousel-move-to-center';
        default: return 'carousel-hidden';
      }
    } else {
      // Moving to the previous slide
      switch (position) {
        case 'prev': return 'carousel-move-to-center';
        case 'current': return 'carousel-move-to-right';
        case 'next': return 'carousel-move-to-right';
        default: return 'carousel-hidden';
      }
    }
  };

  // Get item classes with animation
  const getItemClasses = (index) => {
    const { prevIndex, nextIndex } = getIndices();
    
    let position = '';
    if (index === prevIndex) position = 'prev';
    else if (index === currentIndex) position = 'current';
    else if (index === nextIndex) position = 'next';
    else position = 'hidden';
    
    const baseClasses = "absolute transition-all duration-500 cursor-pointer";
    const animationClass = getAnimationClass(position);
    
    return `${baseClasses} ${animationClass}`;
  };

  // Go to a specific slide by index
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    
    // Determine direction based on index comparison
    const newDirection = (
      index > currentIndex || 
      (index === 0 && currentIndex === totalItems - 1)
    ) ? 'next' : 'prev';
    
    setDirection(newDirection);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 500);
  };

  return (
    <section id="about" className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{aboutMeData.name}</h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between mt-16">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="transition-all duration-500 ease-in-out">
              <h3 className="text-3xl font-bold text-primary mb-4">
                {aboutMeData.data[currentIndex].name}
              </h3>
              <p className="text-lg text-text-light mb-10">
                {aboutMeData.data[currentIndex].description}
              </p>
              
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
                    onClick={() => goToSlide(index)}
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
              {aboutMeData.data.map((item, index) => {
                const { prevIndex, nextIndex } = getIndices();
                
                // Only render visible items
                if (index !== prevIndex && index !== currentIndex && index !== nextIndex) {
                  return null;
                }
                
                return (
                  <div 
                    key={index}
                    className={getItemClasses(index)}
                    onClick={() => {
                      if (index === prevIndex) goToPrev();
                      else if (index === nextIndex) goToNext();
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className={`object-cover rounded-lg ${
                        index === currentIndex 
                          ? 'w-[350px] h-[400px] shadow-custom-heavy' 
                          : 'w-[300px] h-[380px] shadow-custom-medium'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
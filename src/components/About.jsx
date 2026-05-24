import React, { useState, useEffect, useRef, useCallback } from "react";
import aboutMeData from "../data/aboutme";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null); // 'next' or 'prev'
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const totalItems = aboutMeData.data.length;

  // Function to go to next slide
  // Next: center→left, left→right, right→center
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setDirection("next");
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      setIsTransitioning(false);
      setDirection(null);
    }, 600);
  }, [isTransitioning, totalItems]);

  // Function to go to previous slide
  // Prev: center→right, right→left, left→center
  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setDirection("prev");
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
      setIsTransitioning(false);
      setDirection(null);
    }, 600);
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

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Auto rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [goToNext]);

  // Helper to get item indices
  const getIndices = () => {
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;
    return { prevIndex, nextIndex };
  };

  // Get animation class for each card based on its position and transition direction
  const getAnimationClass = (position) => {
    if (!isTransitioning || !direction) {
      // Static positions
      switch (position) {
        case "left":
          return "carousel-pos-left";
        case "center":
          return "carousel-pos-center";
        case "right":
          return "carousel-pos-right";
        default:
          return "carousel-hidden";
      }
    }

    if (direction === "next") {
      // Next: center→left, left→right, right→center
      switch (position) {
        case "center":
          return "carousel-center-to-left";
        case "left":
          return "carousel-left-to-right";
        case "right":
          return "carousel-right-to-center";
        default:
          return "carousel-hidden";
      }
    } else {
      // Prev: center→right, right→left, left→center
      switch (position) {
        case "center":
          return "carousel-center-to-right";
        case "right":
          return "carousel-right-to-left";
        case "left":
          return "carousel-left-to-center";
        default:
          return "carousel-hidden";
      }
    }
  };

  // Determine position label for each index
  const getPosition = (index) => {
    const { prevIndex, nextIndex } = getIndices();
    if (index === currentIndex) return "center";
    if (index === prevIndex) return "left";
    if (index === nextIndex) return "right";
    return "hidden";
  };

  // Go to a specific slide by index (via dot indicators)
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    const { prevIndex } = getIndices();

    if (index === prevIndex) {
      goToPrev();
    } else {
      goToNext();
    }
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
                      index === currentIndex
                        ? "bg-primary scale-125"
                        : "bg-gray-300"
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
            <div className="carousel-container perspective-1000 h-full flex items-center justify-center">
              {aboutMeData.data.map((item, index) => {
                const position = getPosition(index);

                // Only render visible items
                if (position === "hidden") return null;

                const animationClass = getAnimationClass(position);

                return (
                  <div
                    key={index}
                    className={`absolute cursor-pointer ${animationClass}`}
                    onClick={() => {
                      if (position === "left") goToPrev();
                      else if (position === "right") goToNext();
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`object-cover rounded-lg ${
                        position === "center"
                          ? "w-[350px] h-[400px] shadow-custom-heavy"
                          : "w-[300px] h-[380px] shadow-custom-medium"
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

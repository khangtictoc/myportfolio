import React, { useEffect, useState } from 'react';
import personalData from '../data/personal';
import Terminal from './Terminal';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Set the loaded state to true after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('tech-stack') || document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="h-screen flex items-center justify-center mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-float-slow absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="animate-float absolute top-[45%] right-[15%] w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="animate-float-reverse absolute bottom-[20%] left-[20%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profile Image - Now with animation */}
          <div 
            className={`mb-10 transition-all duration-1000 transform ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <div className="profile-image-container mx-auto">
              {personalData.imageUrl ? (
                <img 
                  src={personalData.imageUrl} 
                  alt={personalData.name} 
                  className="profile-image w-60 h-60 md:w-72 md:h-72 object-cover border-4 border-white shadow-custom-medium"
                />
              ) : (
                <div className="profile-image w-60 h-60 md:w-72 md:h-72 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-white text-lg font-medium border-4 border-white shadow-custom-medium">
                  Your Photo
                </div>
              )}
            </div>
          </div>
          
          {/* Text Content - Now with staggered animations */}
          <div className="text-center">
            <h1 
              className={`text-5xl md:text-6xl font-bold mb-5 hero-heading transition-all duration-1000 transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Hi, I'm <span className="text-primary">{personalData.name}</span>
            </h1>
            <p 
              className={`text-xl md:text-2xl text-text-light mb-10 transition-all duration-1000 transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {personalData.title}
            </p>
            
            {/* Terminal Component - now with fade in animation */}
            <div 
              className={`transition-all duration-1000 transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <Terminal 
                command="sudo apt install everything-in-the-world"
                typingSpeed={80}
                deletingSpeed={40}
                initialDelay={1800} // Increased delay to allow for intro animations
                pauseBeforeDelete={1800}
                pauseBeforeType={1000}
                className="mt-10 max-w-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1200ms' }}
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center animate-bounce">
          <p className="text-sm mb-2 text-text-light">Scroll Down</p>
          <FaArrowDown className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 
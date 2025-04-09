import React from 'react';
import personalData from '../data/personal';
import Terminal from './Terminal';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center mt-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profile Image - Now above the text */}
          <div className="mb-10">
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-custom-medium relative mx-auto">
              {personalData.imageUrl ? (
                <img 
                  src={personalData.imageUrl} 
                  alt={personalData.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-white text-lg font-medium">
                  Your Photo
                </div>
              )}
            </div>
          </div>
          
          {/* Text Content - Now below the image */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-5 hero-heading">
              Hi, I'm <span className="text-primary">{personalData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-light mb-10">{personalData.title}</p>
            
            {/* Terminal Component - now with infinite typing loop */}
            <Terminal 
              command="sudo apt install everything-in-the-world"
              typingSpeed={80}
              deletingSpeed={40}
              initialDelay={1000}
              pauseBeforeDelete={1800}
              pauseBeforeType={1000}
              className="mt-10 max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
import React from 'react';
import personalData from '../data/personal';

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
            <h1 className="text-5xl md:text-6xl font-bold mb-5">
              Hi, I'm <span className="text-primary">{personalData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-light mb-10">{personalData.title}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
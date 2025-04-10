import React from 'react';
import educationData from '../data/education';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Education = () => {
  const sectionRef = useIntersectionObserver();

  return (
    <section id="education" className="section bg-light py-20" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-fadeIn">{educationData.name}</h2>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative max-w-3xl mx-auto mt-16">
          {/* Timeline center line */}
          <div className="absolute h-full w-[3px] bg-border-color left-1/2 -translate-x-1/2 animate-fadeIn"></div>
          
          {educationData.data.map((edu, index) => (
            <div 
              key={index} 
              className={`relative mb-16 w-1/2 ${index % 2 === 0 ? 'left-0 pr-10' : 'left-1/2 pl-10'} ${
                index % 2 === 0 ? 'animate-slideInRight' : 'animate-slideInLeft'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className={`absolute w-5 h-5 rounded-full bg-primary z-10 top-5 ${index % 2 === 0 ? 'right-[-10px]' : 'left-[-10px]'} animate-zoomIn`}
                   style={{ animationDelay: `${0.3 + index * 0.2}s` }}></div>
              
              {/* Content box */}
              <div className="bg-white p-5 rounded-lg shadow-custom-light hover:shadow-custom-medium transition-all duration-300 hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold mb-1 animate-fadeIn" 
                    style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                  {edu.degree}
                </h3>
                <h4 className="text-primary mb-2 animate-fadeIn"
                    style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                  {edu.institution}
                </h4>
                <div className="flex flex-wrap justify-between items-center mb-3">
                  <p className="text-text-light italic animate-fadeIn"
                     style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                    {edu.period}
                  </p>
                  {edu.location && (
                    <p className="text-text-light text-sm bg-light px-2 py-1 rounded animate-fadeIn"
                       style={{ animationDelay: `${0.7 + index * 0.2}s` }}>
                      {edu.location}
                    </p>
                  )}
                </div>
                <p className="animate-fadeIn"
                   style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden relative max-w-md mx-auto mt-16">
          {/* Timeline left line */}
          <div className="absolute h-full w-[3px] bg-border-color left-[20px] animate-fadeIn"></div>
          
          {educationData.data.map((edu, index) => (
            <div 
              key={index} 
              className="relative ml-[50px] mb-10 pl-5 animate-slideInRight"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute w-5 h-5 rounded-full bg-primary z-10 top-5 left-[-42px] animate-zoomIn"
                   style={{ animationDelay: `${0.3 + index * 0.2}s` }}></div>
              
              {/* Content box */}
              <div className="bg-white p-5 rounded-lg shadow-custom-light hover:shadow-custom-medium transition-all duration-300 hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold mb-1 animate-fadeIn"
                    style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                  {edu.degree}
                </h3>
                <h4 className="text-primary mb-2 animate-fadeIn"
                    style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                  {edu.institution}
                </h4>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <p className="text-text-light italic animate-fadeIn"
                     style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                    {edu.period}
                  </p>
                  {edu.location && (
                    <p className="text-text-light text-sm bg-light px-2 py-1 rounded mt-1 sm:mt-0 animate-fadeIn"
                       style={{ animationDelay: `${0.7 + index * 0.2}s` }}>
                      {edu.location}
                    </p>
                  )}
                </div>
                <p className="animate-fadeIn"
                   style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 
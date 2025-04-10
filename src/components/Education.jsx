import React from 'react';
import educationData from '../data/education';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Education = () => {
  const sectionRef = useIntersectionObserver();

  return (
    <section id="education" className="section bg-light" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{educationData.name}</h2>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative max-w-3xl mx-auto">
          {/* Timeline center line */}
          <div className="absolute h-full w-[3px] bg-border-color left-1/2 -translate-x-1/2"></div>
          
          {educationData.data.map((edu, index) => (
            <div 
              key={index} 
              className={`relative mb-16 w-1/2 ${index % 2 === 0 ? 'left-0 pr-10' : 'left-1/2 pl-10'} animate-fadeInUp`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className={`absolute w-5 h-5 rounded-full bg-primary z-10 top-5 ${index % 2 === 0 ? 'right-[-10px]' : 'left-[-10px]'}`}></div>
              
              {/* Content box */}
              <div className="bg-white p-5 rounded-lg shadow-custom-light">
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <h4 className="text-primary mb-2">{edu.institution}</h4>
                <p className="text-text-light italic mb-2">{edu.period}</p>
                {edu.location && <p className="text-text-light mb-4">{edu.location}</p>}
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden relative max-w-md mx-auto">
          {/* Timeline left line */}
          <div className="absolute h-full w-[3px] bg-border-color left-[20px]"></div>
          
          {educationData.data.map((edu, index) => (
            <div 
              key={index} 
              className="relative ml-[50px] mb-10 pl-5 animate-fadeInUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute w-5 h-5 rounded-full bg-primary z-10 top-5 left-[-42px]"></div>
              
              {/* Content box */}
              <div className="bg-white p-5 rounded-lg shadow-custom-light">
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <h4 className="text-primary mb-2">{edu.institution}</h4>
                <p className="text-text-light italic mb-2">{edu.period}</p>
                {edu.location && <p className="text-text-light mb-4">{edu.location}</p>}
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 
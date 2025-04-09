import React from 'react';

const Education = () => {
  const educationHistory = [
    {
      degree: 'Degree Name',
      institution: 'University Name',
      period: '2018 - 2022',
      description: 'Brief description of your studies, specializations, notable projects or achievements during this period.'
    },
    {
      degree: 'Previous Degree/Certificate',
      institution: 'Institution Name',
      period: '2016 - 2018',
      description: 'Brief description of your studies during this period.'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative max-w-3xl mx-auto">
          {/* Timeline center line */}
          <div className="absolute h-full w-[3px] bg-border-color left-1/2 -translate-x-1/2"></div>
          
          {educationHistory.map((edu, index) => (
            <div 
              key={index} 
              className={`relative mb-16 w-1/2 ${index % 2 === 0 ? 'left-0 pr-10' : 'left-1/2 pl-10'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute w-5 h-5 rounded-full bg-primary z-10 top-5 ${index % 2 === 0 ? 'right-[-10px]' : 'left-[-10px]'}`}></div>
              
              {/* Content box */}
              <div className="bg-white p-5 rounded-lg shadow-custom-light">
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <h4 className="text-primary mb-2">{edu.institution}</h4>
                <p className="text-text-light italic mb-4">{edu.period}</p>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden relative max-w-md mx-auto">
          {/* Timeline left line */}
          <div className="absolute h-full w-[3px] bg-border-color left-[20px]"></div>
          
          {educationHistory.map((edu, index) => (
            <div key={index} className="relative ml-[50px] mb-10 pl-5">
              {/* Timeline dot */}
              <div className="absolute w-5 h-5 rounded-full bg-primary z-10 top-5 left-[-42px]"></div>
              
              {/* Content box */}
              <div className="bg-white p-5 rounded-lg shadow-custom-light">
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <h4 className="text-primary mb-2">{edu.institution}</h4>
                <p className="text-text-light italic mb-4">{edu.period}</p>
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
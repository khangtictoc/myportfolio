import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import achievementData from '../data/achievement';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Achievements = () => {
  const sectionRef = useIntersectionObserver();

  // Function to select an appropriate icon based on achievement type
  const getIcon = (name) => {
    if (name.toLowerCase().includes('challenge') || name.toLowerCase().includes('prize')) {
      return <FaTrophy />;
    } else if (name.toLowerCase().includes('certified') || name.toLowerCase().includes('azure')) {
      return <FaCertificate />;
    } else if (name.toLowerCase().includes('award') || name.toLowerCase().includes('recognition')) {
      return <FaAward />;
    } else {
      return <FaMedal />;
    }
  };

  return (
    <section id="achievements" className="section bg-white py-20" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-fadeIn">{achievementData.name}s</h2>
        
        <p className="text-center max-w-3xl mx-auto mb-12 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
          Professional certifications and recognitions that highlight my expertise and dedication to continuous learning.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementData.data.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg text-center shadow-custom-light transition-all duration-300 hover:-translate-y-2 hover:shadow-custom-heavy animate-zoomIn"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div 
                className="w-[70px] h-[70px] bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 animate-fadeIn"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-4xl text-primary animate-trophy-shimmer">
                  {getIcon(achievement.name)}
                </div>
              </div>
              <h3 
                className="text-xl font-semibold mb-2 animate-fadeIn"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {achievement.name}
              </h3>
              <div 
                className="text-primary font-medium mb-1 animate-fadeIn"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {achievement.result}
              </div>
              <div 
                className="text-sm text-text-light mb-3 animate-fadeIn"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {achievement.organizer} | {achievement.yearDate}
              </div>
              <p 
                className="text-text-light animate-fadeIn"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 
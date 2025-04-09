import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import achievementData from '../data/achievement';

const Achievements = () => {
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
    <section id="achievements" className="section bg-white">
      <div className="container">
        <h2 className="section-title">{achievementData.name}s</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementData.data.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg text-center shadow-custom-light transition-all duration-300 hover:-translate-y-2 hover:shadow-custom-heavy"
            >
              <div className="w-[70px] h-[70px] bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <div className="text-4xl text-primary">
                  {getIcon(achievement.name)}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{achievement.name}</h3>
              <div className="text-primary font-medium mb-1">{achievement.result}</div>
              <div className="text-sm text-text-light mb-3">
                {achievement.organizer} | {achievement.yearDate}
              </div>
              <p className="text-text-light">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 
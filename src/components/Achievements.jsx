import React from "react";
import achievementData from "../data/achievement";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Achievements = () => {
  const sectionRef = useIntersectionObserver();

  return (
    <section
      id="achievements"
      className="section bg-white py-20"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title animate-fadeIn">
          {achievementData.name}s
        </h2>

        <p
          className="text-center max-w-3xl mx-auto mb-12 animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          Professional certifications and recognitions that highlight my
          expertise and dedication to continuous learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementData.data.map((achievement, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-custom-light transition-all duration-300 hover:shadow-custom-heavy hover:-translate-y-2 animate-zoomIn"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Image Section with Decorative Border */}
              <div
                className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Circular Image */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-40 h-40">
                    {/* Image */}
                    <img
                      src={achievement.image}
                      alt={achievement.name}
                      className="absolute inset-0 rounded-full object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 text-center">
                <h3
                  className="text-xl font-bold mb-2 text-primary animate-fadeIn group-hover:scale-110 group-hover:text-secondary transition-all duration-300 transform"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {achievement.name}
                </h3>

                {/* Badge-style result */}
                <div
                  className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-3 animate-fadeIn group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 transform"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {achievement.result}
                </div>

                {/* Organizer and Year */}
                <div
                  className="text-sm text-text-light mb-4 animate-fadeIn flex justify-center gap-2 group-hover:text-primary group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 transform"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <span className="font-medium">{achievement.organizer}</span>
                  <span className="text-gray-400 group-hover:text-primary/40">
                    •
                  </span>
                  <span>{achievement.yearDate}</span>
                </div>

                {/* Description */}
                <p
                  className="text-text-light leading-relaxed animate-fadeIn group-hover:text-text-primary group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500 transform"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

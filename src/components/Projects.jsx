import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaClock, FaUserTag, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import projectsData from '../data/projects';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Projects = () => {
  // State to track which project details are expanded
  const [expandedProjects, setExpandedProjects] = useState({});
  const sectionRef = useIntersectionObserver();

  // Toggle expanded state for a project
  const toggleProjectDetails = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section id="projects" className="section bg-light py-20" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-fadeIn">{projectsData.name}</h2>
        
        <p className="text-center max-w-3xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
          A selection of professional projects I've worked on throughout my career,
          showcasing my technical abilities and problem-solving skills.
        </p>
        
        <div className="grid grid-cols-1 gap-10">
          {projectsData.data.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden shadow-custom-light transition-all duration-300 hover:shadow-custom-heavy p-6 lg:p-8 ${
                index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="flex flex-col">
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary animate-fadeIn" 
                      style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                    {project.name}
                  </h3>
                  <div className="mt-2 lg:mt-0 text-sm text-text-light animate-fadeIn"
                       style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                    <span className="inline-flex items-center mr-4">
                      <FaCalendarAlt className="mr-1" /> {project.year}
                    </span>
                    <span className="inline-flex items-center">
                      <FaClock className="mr-1" /> {project.duration}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 animate-fadeIn"
                     style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                  <FaUserTag className="text-primary mr-2" />
                  <span className="text-text-light">{project.role}</span>
                </div>
                
                <p className="text-lg font-medium mb-2 animate-fadeIn"
                   style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                  {project.shortDescription}
                </p>
                <p className="text-text-light mb-4 animate-fadeIn"
                   style={{ animationDelay: `${0.7 + index * 0.2}s` }}>
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm animate-zoomIn"
                      style={{ animationDelay: `${0.8 + index * 0.2 + techIndex * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Expandable Features Section */}
                <div className="mb-4 animate-fadeIn"
                     style={{ animationDelay: `${0.9 + index * 0.2}s` }}>
                  <button 
                    onClick={() => toggleProjectDetails(index)}
                    className="flex items-center text-primary font-medium focus:outline-none transition-all duration-300 hover:translate-x-1"
                  >
                    Responsibilities 
                    {expandedProjects[index] ? 
                      <FaChevronUp className="ml-2" /> : 
                      <FaChevronDown className="ml-2" />
                    }
                  </button>
                  
                  {expandedProjects[index] && (
                    <ul className="mt-3 pl-5 text-text-light list-disc animate-fadeIn">
                      {project.responsibilities.map((responsibility, respIndex) => (
                        <li 
                          key={respIndex} 
                          className="mb-1 animate-slideInRight"
                          style={{ animationDelay: `${0.2 + respIndex * 0.1}s` }}
                        >
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                {/* Links */}
                <div className="flex gap-3 mt-6 animate-fadeIn"
                     style={{ animationDelay: `${1.0 + index * 0.2}s` }}>
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-small btn-secondary flex items-center gap-2 transform transition-transform duration-300 hover:-translate-y-1"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-small btn-primary flex items-center gap-2 transform transition-transform duration-300 hover:-translate-y-1"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
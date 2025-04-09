import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaClock, FaUserTag, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import projectsData from '../data/projects';

const Projects = () => {
  // State to track which project details are expanded
  const [expandedProjects, setExpandedProjects] = useState({});

  // Toggle expanded state for a project
  const toggleProjectDetails = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <h2 className="section-title">{projectsData.name}s</h2>
        <div className="grid grid-cols-1 gap-10">
          {projectsData.data.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-custom-light transition-all duration-300 hover:shadow-custom-heavy p-6 lg:p-8"
            >
              <div className="flex flex-col">
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">{project.name}</h3>
                  <div className="mt-2 lg:mt-0 text-sm text-text-light">
                    <span className="inline-flex items-center mr-4">
                      <FaCalendarAlt className="mr-1" /> {project.year}
                    </span>
                    <span className="inline-flex items-center">
                      <FaClock className="mr-1" /> {project.duration}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <FaUserTag className="text-primary mr-2" />
                  <span className="text-text-light">{project.role}</span>
                </div>
                
                <p className="text-lg font-medium mb-2">{project.shortDescription}</p>
                <p className="text-text-light mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Expandable Features Section */}
                <div className="mb-4">
                  <button 
                    onClick={() => toggleProjectDetails(index)}
                    className="flex items-center text-primary font-medium focus:outline-none"
                  >
                    Responsibilities 
                    {expandedProjects[index] ? 
                      <FaChevronUp className="ml-2" /> : 
                      <FaChevronDown className="ml-2" />
                    }
                  </button>
                  
                  {expandedProjects[index] && (
                    <ul className="mt-3 pl-5 text-text-light list-disc">
                      {project.responsibilities.map((responsibilities, responsibilitiesIndex) => (
                        <li key={responsibilitiesIndex} className="mb-1">{responsibilities}</li>
                      ))}
                    </ul>
                  )}
                </div>
                
                {/* Links */}
                <div className="flex gap-3 mt-6">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-small btn-secondary flex items-center gap-2"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-small btn-primary flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
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
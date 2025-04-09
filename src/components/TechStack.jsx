import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';

const TechStack = () => {
  const skills = {
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Python', icon: <FaPython /> },
    ],
    tools: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  };

  // Component for a single skill category
  const SkillCategory = ({ title, skills }) => (
    <div className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow-custom-light">
      <h3 className="text-xl font-semibold mb-5 pb-2 border-b border-border-color">{title}</h3>
      <div className="flex flex-wrap gap-5">
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );

  // Component for a single skill item
  const SkillItem = ({ name, icon }) => (
    <div className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:-translate-y-1 w-[calc(50%-10px)]">
      <div className="text-5xl text-primary mb-2">{icon}</div>
      <p>{name}</p>
    </div>
  );

  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="flex flex-wrap gap-8 justify-between">
          <SkillCategory title="Devops, Cloud & Infra" skills={skills.frontend} />
          <SkillCategory title="Programming & Frameworks" skills={skills.backend} />
          <SkillCategory title="Testing, Document & Others" skills={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default TechStack; 
import React from 'react';
import TechStackItem from './TechStackItem';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
// Import the SVG icons

// Devops, Cloud & Infra
import awsSVG from '../asset/icon/AWS-Dark.svg';
import azureSVG from '../asset/icon/Azure-Dark.svg';
import terraformSVG from '../asset/icon/Terraform-Dark.svg';
import ansibleSVG from '../asset/icon/Ansible.svg';
import dockerSVG from '../asset/icon/Docker.svg';
import kubernetesSVG from '../asset/icon/Kubernetes.svg';
import elkSVG from '../asset/icon/Elasticsearch-Dark.svg';
import prometheusSVG from '../asset/icon/Prometheus.svg';
import grafanaSVG from '../asset/icon/Grafana-Dark.svg';
import kaliSVG from '../asset/icon/Kali-Dark.svg';
import linuxSVG from '../asset/icon/Linux-Dark.svg';
import ubuntuSVG from '../asset/icon/Ubuntu-Dark.svg';
import jenkinsSVG from '../asset/icon/Jenkins-Dark.svg';
import gitSVG from '../asset/icon/Git.svg';
import githubSVG from '../asset/icon/Github-Dark.svg';
import gitlabSVG from '../asset/icon/GitLab-Dark.svg';
import bitbucketSVG from '../asset/icon/BitBucket-Dark.svg';
import githubActionsSVG from '../asset/icon/GithubActions-Dark.svg';
import cloudFlareSVG from '../asset/icon/Cloudflare-Dark.svg';
import mongoSVG from '../asset/icon/MongoDB.svg';
import postgresSVG from '../asset/icon/PostgreSQL-Dark.svg';
import nginxSVG from '../asset/icon/Nginx.svg';

// Programming & Languages
import htmlSVG from '../asset/icon/HTML.svg';
import cssSVG from '../asset/icon/CSS.svg';
import jsSVG from '../asset/icon/JavaScript.svg';
import cSVG from '../asset/icon/C.svg';
import cppSVG from '../asset/icon/CPP.svg';
import csharpSVG from '../asset/icon/CS.svg';
import javaSVG from '../asset/icon/Java-Dark.svg';
import springSVG from '../asset/icon/Spring-Dark.svg';
import powershellSVG from '../asset/icon/Powershell-Dark.svg';
import bashSVG from '../asset/icon/Bash-Dark.svg';
import pythonSVG from '../asset/icon/Python-Dark.svg';
import tensorflowSVG from '../asset/icon/TensorFlow-Dark.svg';
import sklearnSVG from '../asset/icon/ScikitLearn-Dark.svg';
import pytorchSVG from '../asset/icon/PyTorch-Dark.svg';

// Tools & Technologies
import markdownSVG from '../asset/icon/Markdown-Dark.svg';
import cypressSVG from '../asset/icon/Cypress-Dark.svg';
import seleniumSVG from '../asset/icon/Selenium.svg';
import postmanSVG from '../asset/icon/Postman.svg';
import notionSVG from '../asset/icon/Notion-Dark.svg';
import vscodeSVG from '../asset/icon/VSCode-Dark.svg';
import vsSVG from '../asset/icon/VisualStudio-Dark.svg';
import eclipseSVG from '../asset/icon/Eclipse-Dark.svg';

const TechStack = () => {
  const sectionRef = useIntersectionObserver();
  
  const skills = {
    devops: [
      { name: 'AWS', iconSrc: awsSVG },
      { name: 'Azure', iconSrc: azureSVG },
      { name: 'Terraform', iconSrc: terraformSVG },
      { name: 'Ansible', iconSrc: ansibleSVG },
      { name: 'Docker', iconSrc: dockerSVG },
      { name: 'Kubernetes', iconSrc: kubernetesSVG },
      { name: 'Elasticsearch', iconSrc: elkSVG },
      { name: 'Prometheus', iconSrc: prometheusSVG },
      { name: 'Grafana', iconSrc: grafanaSVG },
      { name: 'Jenkins', iconSrc: jenkinsSVG },
      { name: 'CloudFlare', iconSrc: cloudFlareSVG },
      { name: 'Nginx', iconSrc: nginxSVG },
      { name: 'Linux', iconSrc: linuxSVG },
      { name: 'Ubuntu', iconSrc: ubuntuSVG },
      { name: 'Kali Linux', iconSrc: kaliSVG },
      { name: 'Git', iconSrc: gitSVG },
      { name: 'GitHub', iconSrc: githubSVG },
      { name: 'GitLab', iconSrc: gitlabSVG },
      { name: 'BitBucket', iconSrc: bitbucketSVG },
      { name: 'GitHub Actions', iconSrc: githubActionsSVG },
      { name: 'MongoDB', iconSrc: mongoSVG },
      { name: 'PostgreSQL', iconSrc: postgresSVG },
    ],
    programming: [
      { name: 'HTML5', iconSrc: htmlSVG },
      { name: 'CSS3', iconSrc: cssSVG },
      { name: 'JavaScript', iconSrc: jsSVG },
      { name: 'Python', iconSrc: pythonSVG },
      { name: 'Java', iconSrc: javaSVG },
      { name: 'C', iconSrc: cSVG },
      { name: 'C++', iconSrc: cppSVG },
      { name: 'C#', iconSrc: csharpSVG },
      { name: 'Spring', iconSrc: springSVG },
      { name: 'TensorFlow', iconSrc: tensorflowSVG },
      { name: 'Scikit-Learn', iconSrc: sklearnSVG },
      { name: 'PyTorch', iconSrc: pytorchSVG },
      { name: 'Bash', iconSrc: bashSVG },
      { name: 'PowerShell', iconSrc: powershellSVG },
    ],
    tools: [
      { name: 'Markdown', iconSrc: markdownSVG },
      { name: 'Cypress', iconSrc: cypressSVG },
      { name: 'Selenium', iconSrc: seleniumSVG },
      { name: 'Postman', iconSrc: postmanSVG },
      { name: 'Notion', iconSrc: notionSVG },
      { name: 'VS Code', iconSrc: vscodeSVG },
      { name: 'Visual Studio', iconSrc: vsSVG },
      { name: 'Eclipse', iconSrc: eclipseSVG },
    ],
  };

  // Component for a single skill category
  const SkillCategory = ({ title, skills, animationDelay }) => (
    <div 
      className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow-custom-light animate-fadeInUp"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <h3 className="text-xl font-semibold mb-5 pb-2 border-b border-border-color animate-fadeIn" 
          style={{ animationDelay: `${animationDelay + 0.2}s` }}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-5">
        {skills.map((skill, index) => (
          <TechStackItem 
            key={index} 
            name={skill.name} 
            iconSrc={skill.iconSrc} 
            altText={`${skill.name} icon`}
            animationDelay={animationDelay + 0.3 + (index * 0.05)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="tech-stack" className="section bg-light py-20" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-fadeIn">Tech Stack</h2>
        <div className="flex flex-wrap gap-8 justify-between">
          <SkillCategory title="DevOps, Cloud & Infra" skills={skills.devops} animationDelay={0.2} />
          <SkillCategory title="Programming & Languages" skills={skills.programming} animationDelay={0.4} />
          <SkillCategory title="Tools & Technologies" skills={skills.tools} animationDelay={0.6} />
        </div>
      </div>
    </section>
  );
};

export default TechStack; 
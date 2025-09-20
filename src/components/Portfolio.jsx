import React from "react";
import skillvaultImg from "../assets/skillvaultImg.png"; // SkillVault screenshot
import fitnessImg from "../assets/fitnessImg.png";       // Fitness Tracker screenshot
import portfolioImg from "../assets/portfolioImg.png";   // Portfolio project screenshot

export default function Portfolio() {
  const works = [
    { 
      title: "SkillVault – Career Roadmap Tracker", 
      desc: "Full-stack web app using Java (Spring Boot), React.js, MySQL, and REST APIs for skill tracking and career planning.", 
      link: "https://github.com/TejaswiniH123/SkillVault" 
    },
    { 
      title: "Professional Fitness Tracking System", 
      desc: "Mini project with React.js, Node.js, and MySQL for tracking workouts, diet plans, progress, and trainer feedback.", 
      link: "https://github.com/TejaswiniH123/FitnessTrackingSystem" 
    },
    { 
      title: "My Personal Portfolio", 
      desc: "React.js-based personal portfolio website showcasing my projects, skills, services, and contact information.", 
      link: "https://github.com/TejaswiniH123/MyPortfolio" 
    }
  ];

  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          {works.map((work, i) => (
            <div className="work" key={i}>
              <img
                src={i === 0 ? skillvaultImg : i === 1 ? fitnessImg : portfolioImg}
                alt={work.title}
              />
              <div className="layer">
                <h3>{work.title}</h3>
                <p>{work.desc}</p>
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://github.com/TejaswiniH123" className="btn" target="_blank" rel="noopener noreferrer">
            See more
          </a>
        </div>
      </div>
    </div>
  );
}

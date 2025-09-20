import React, { useState } from 'react';
import photo from '../assets/photo.jpg';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = {
    skills: [
      { title: 'Backend Development', desc: 'Java, Spring Boot, REST API, MySQL' },
      { title: 'Frontend Development', desc: 'React.js (Basic), HTML, CSS, JavaScript' },
      { title: 'Problem-Solving', desc: 'Data Structures, Algorithms, SQL queries' },
    ],
    experience: [
      { title: 'Amazon Future Engineer – Mentee', desc: 'Learned Python, DSA, and coding best practices (Mar 2025 – May 2025)' },
      { title: 'Hackathons & Projects', desc: 'Participated in many hackathons and gain valuable experience also built SkillVault & Fitness Tracking System with full-stack technologies' },
    ],
    education: [
      { title: '2023 – 2027', desc: 'B.E. in Information Science & Engineering, NIE Mysuru (CGPA: 8.99/10)' },
      { title: '2021 – 2023', desc: 'PUC (PCMB), Vishwachetana PU College, Davangere (96.33%)' },
      { title: '2021', desc: 'SSLC, St. Mary’s Convent School, Harihar (95.84%)' },
    ]
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="about-col-1">
            <img src={photo} alt="Tejaswini H" />
          </div>

          {/* Right Column */}
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              I’m Tejaswini H, a passionate 3rd-year Information Science and Engineering student specializing in Backend Development. 
              I enjoy building scalable applications, designing efficient APIs, and solving problems through data-driven solutions. 
              With hands-on experience in full-stack projects, mentorship programs, and hackathons, I strive to grow as a versatile 
              developer while preparing for impactful roles in the tech industry.
            </p>

            {/* Tabs */}
            <div className="tab-titles">
              {Object.keys(tabs).map(tab => (
                <p
                  key={tab}
                  className={`tab-links ${activeTab === tab ? 'active-link' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </p>
              ))}
            </div>

            {/* Tab Content */}
            <div className="tab-contents">
              {tabs[activeTab].map((item, i) => (
                <div key={i} className="tab-item">
                  <span className="tab-title">{item.title}</span>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

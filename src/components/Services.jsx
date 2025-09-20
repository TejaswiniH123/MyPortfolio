import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Services() {
  const services = [
    { icon: 'fas fa-server', title: 'Backend Development', desc: 'Building scalable APIs and server-side applications using Java and Spring Boot.' },
    { icon: 'fas fa-database', title: 'Database Design & SQL', desc: 'Designing relational databases, writing efficient SQL queries, and managing MySQL databases.' },
    { icon: 'fas fa-project-diagram', title: 'Full-Stack Projects', desc: 'Developing full-stack web applications with React frontend and Spring Boot backend.' },
    { icon: 'fas fa-code', title: 'REST API Development', desc: 'Designing and integrating RESTful APIs for smooth frontend-backend communication.' },
    { icon: 'fas fa-chart-line', title: 'Problem Solving & DSA', desc: 'Solving algorithmic problems and optimizing solutions with data structures and algorithms.' },
  ];

  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Expertise</h1>
        <div className="services-list">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <i className={service.icon}></i>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

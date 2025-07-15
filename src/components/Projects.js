import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: "Money Tracker",
      desc: "Track income and expenses using React and local storage.",
      link: "#"
    },
    {
      name: "Freelancer Portfolio",
      desc: "A personal portfolio website built with React and CSS.",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {projectList.map((proj, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '10px',
            width: '300px',
            backgroundColor: 'var(--bg)'
          }}>
            <h3 style={{ color: 'var(--primary)' }}>{proj.name}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">🔗 View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

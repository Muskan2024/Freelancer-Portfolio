import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-card">
        <img src="https://via.placeholder.com/300x200" alt="Project 1" />
        <h3>Money Tracker App</h3>
        <p>
          A web app to track income and expenses with charts and history. Built using React and localStorage.
        </p>
        <a href="https://github.com/muskanpal/money-tracker" target="_blank" rel="noreferrer">View Code</a>
        <a href="https://moneytracker-demo.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
      </div>

      <div className="project-card">
        <img src="https://via.placeholder.com/300x200" alt="Project 2" />
        <h3>Weather App</h3>
        <p>
          A weather forecast app using OpenWeather API. Displays temperature, humidity, and wind speed by city name.
        </p>
        <a href="https://github.com/muskanpal/weather-app" target="_blank" rel="noreferrer">View Code</a>
        <a href="https://weather-muskan.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </section>
  );
};

export default Projects;

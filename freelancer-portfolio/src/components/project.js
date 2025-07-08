import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects py-12 px-6 bg-gray-50 text-black dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div className="project-card bg-white dark:bg-gray-800 rounded shadow p-6 transition hover:shadow-lg">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Money Tracker App"
            className="rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Money Tracker App</h3>
          <p className="mb-4">
            A web app to track income and expenses with charts and history.
            Built using React and localStorage.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/muskanpal/money-tracker"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Code
            </a>
            <a
              href="https://moneytracker-demo.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card bg-white dark:bg-gray-800 rounded shadow p-6 transition hover:shadow-lg">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Weather App"
            className="rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Weather App</h3>
          <p className="mb-4">
            A weather forecast app using OpenWeather API. Displays temperature,
            humidity, and wind speed by city name.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/muskanpal/weather-app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Code
            </a>
            <a
              href="https://weather-muskan.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

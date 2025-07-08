import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills py-12 px-6 bg-gray-50 text-black dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-center">
        <li className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition">
          HTML5
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition">
          CSS3
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition">
          JavaScript
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition">
          React.js
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition">
          Git & GitHub
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition">
          Responsive Web Design
        </li>
      </ul>
    </section>
  );
};

export default Skills;

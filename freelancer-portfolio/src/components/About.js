import React from "react";

const About = () => {
  return (
    <section id="about" className="about p-6 bg-white text-black">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      
      <p className="mb-4">
        Hello! I'm Muskan, a passionate Frontend Developer currently pursuing B.Tech in Computer Science.
        I love creating user-friendly, responsive websites using React, HTML, and CSS. I'm always eager to learn new technologies and improve my coding skills.
      </p>

      {/* ✅ Resume Download Button */}
      <a
        href="/Muskan_Resume.pdf"
        download
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default About;

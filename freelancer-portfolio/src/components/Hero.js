import React from "react";

const Hero = () => {
  return (
    <section className="hero min-h-screen flex flex-col items-center justify-center text-center bg-white text-black dark:bg-gray-800 dark:text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hello, I'm Muskan 👋
      </h1>
      <p className="text-lg md:text-xl mb-6">
        I’m a passionate Frontend Developer building modern React websites.
      </p>
      <a
        href="#projects"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;

import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white text-black dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">
      <h2 className="text-xl font-bold">Muskan's Portfolio</h2>

      <ul className="flex space-x-6 font-medium">
        <li>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-blue-500 transition">Testimonials</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

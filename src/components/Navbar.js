import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Muskan's Portfolio</h2>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

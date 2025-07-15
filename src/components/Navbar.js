import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div><strong>Muskan Pal</strong></div>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" download>
  <button style={{ marginLeft: '10px' }}>📄 Download Resume</button>
</a>

      </div>
    </nav>
  );
};

export default Navbar;

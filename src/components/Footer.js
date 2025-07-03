import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with ❤️ by Muskan Pal</p>
      <div className="social-links">
        <a href="https://github.com/muskanpal" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/muskanpal" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:muskan@example.com">Email</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Muskan Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

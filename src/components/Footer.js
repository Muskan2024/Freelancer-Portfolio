import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--bg)', 
      color: 'var(--text)', 
      textAlign: 'center', 
      padding: '30px 10px', 
      borderTop: '1px solid #ccc' 
    }}>
      <p style={{ marginBottom: '10px' }}>Made with ❤️ by <strong>Muskan Pal</strong></p>

      <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '1.5rem' }}>
        <a href="https://github.com/muskanpal" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/muskan-pal-1092b0201/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)' }}>
          <FaLinkedin />
        </a>
        <a href="mailto:muskan2024h@gmail.com" style={{ color: 'var(--text)' }}>
          <FaEnvelope />
        </a>
      </div>

      <p style={{ fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Muskan Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

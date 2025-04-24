import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About This Project</h3>
          <p>
            This is a Movie Discovery Application built using React.js. It allows users to browse movies, view detailed information, and explore cast details. Designed and developed with ❤️ by <strong>SINCHANA KS</strong>.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="https://github.com/Sinchanaks130?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sinchana-k-s-85451b342/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a> */}
            {/* <a href="https://Instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} <strong>Sinchana KS</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      Connect with me:
      <a href="https://www.linkedin.com/in/aastha-shukla/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="https://github.com/aasthas2022" target="_blank" rel="noopener noreferrer">
        GitHub     
      </a>
      <a href="./AasthaShukla_FullStack_Resume.pdf" download>
          Download Resume
        </a>
    </footer>
  );
}

export default Footer;

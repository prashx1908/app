import React, { useState } from 'react';
import '../styles/Sidebar.css';
import cvFile from './Prashanth_CV.pdf'; // Adjust the path accordingly

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <button className="logo" onClick={scrollToTop}>
        <span>&lt;PG&gt;</span>
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about-me">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li className="cv-link"><a href={cvFile} download="Prashanth_CV.pdf">Download CV</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Sidebar;
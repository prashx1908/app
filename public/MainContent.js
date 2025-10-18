import React from 'react';
import '../styles/MainContent.css';

export const MainContent = () => {
  return (
    <main className="main-content">
      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a developer passionate about building web solutions that impact people positively.
          I have experience with a wide array of technologies, including JavaScript, React, Node.js, and more.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A brief description of Project 1.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>A brief description of Project 2.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: prashanth@example.com</p>
        <p>Phone: +91 9999999999</p>
      </section>
    </main>
  );
};

export default MainContent;
import React from 'react';
import '../styles/Header.css';

import profilePicture from './JOP.jpeg';
import projectImage1 from './image1.png';
import projectImage2 from './image3.png';
import projectImage3 from './image2.png';
import projectImage4 from './image4.png';
import projectImage5 from './image5.png';
import projectImage6 from './image6.jpg';
import projectImage7 from './image7.png';
import mainpic from './ok.jpg';
import vidyasagarLogo from './vidyasagar.png';
import mitSquareLogo from './mitsq.jpeg';
import dscLogo from './dsc.jpeg';
// Add these imports at the top of your file with the other imports
import certImage1 from './cert1.jpg'; // Machine Learning A-Z
import certImage2 from './cert2.jpg'; // Product Design
import certImage3 from './cert3.jpg'; // Data Analytics
import certImage4 from './cert4.jpg'; // Code Vipasanna
import certImage5 from './cert5.jpg'; // NLP Course
import certImage6 from './cert6.jpg'; // Machine Learning Intro
import certImage7 from './cert7.jpg'; // Learn Python
import certImage8 from './cert8.jpg'; // Digital Components
import certImage9 from './cert9.jpg'; // Database Management
import certImage10 from './cert10.jpg'; // Best Intern Team of the Year
import certImage11 from './cert11.png'; // Cisco Python Essentials
import certImage12 from './cert12.jpg'; // TEXUS'24 Technical Event Volunteer 
import certImage13 from './cert13.jpg'; // MIT Internship Joining Letter
import certImage14 from './cert14.jpg'; // TEXUS'23 Volunteer

// Hackathon images
import hackathonImage1 from './hackathon1.jpg'; // WTM She Innovates
import hackathonImage2 from './hackathon2.jpg'; // Entropy'24
import hackathonImage3 from './hackathon3.jpg'; // DevsHouse
import hackathonImage4 from './hackathon4.jpg'; // DIMO Hacks & TRINIT Hackathon
import hackathonImage5 from './hackathon5.jpg'; // DIMO Hacks & TRINIT Hackathon
import hackathonImage6 from './hackathon6.jpg'; // TRINIT Hackathon



export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="text-content">
            <h1>Hello, I'm Prashanth G <span role="img" aria-label="wave">👋</span></h1>
            <p>I am Prashanth, a pre-final year B.Tech in Computer Science and Engineering student at SRM Institute of Science and Technology with a strong interest in Software
Development and Machine Learning. I bring a deep understanding of data structures, operating systems, and database
management systems, with technical expertise in C++, Python, web development, and machine learning.
Recognized as a competent leader, I excel in self-managing independent projects and also collaborating effectively as
part of a productive team.</p>
            <div className="social-links">
              <a href="https://github.com/prashx1908" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/prashanth-g-399225202/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://leetcode.com/u/prashx1908/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </div>
          </div>
          <img src={mainpic} alt="Prashanth" className="profile-picture1" />
        </div>
      </header>

      <main className="main-content">
      <section id="about-me" className="about-me-section">
        <h2>About Me</h2>
        <div className="about-me-content">
          <div className="about-me-text">
            <p>
              Hello! I'm Prashanth, a passionate and dedicated Computer Science student currently pursuing my B.Tech at SRM Institute of Science and Technology, Chennai. With a CGPA of 9.82, I have developed a solid foundation in various areas of technology, particularly in machine learning, web development, and UI/UX design.
            </p>
            <p>
              My journey in machine learning has been exciting and fulfilling. I have built predictive models and algorithms using Python and libraries such as NumPy, Pandas, Scikit-learn, and TensorFlow. One of my notable projects was developing a postpartum depression prediction model, which earned the First Prize at the WTM She Innovates Hackathon. This experience ignited my passion for creating impactful solutions through data-driven insights.
            </p>
            <p>
              In web development, I am proficient in HTML, CSS, JavaScript, and frameworks like React.js, Django, and Flask. I take pride in building user-friendly web applications that prioritize user experience and responsiveness. My expertise in UI/UX design allows me to craft visually appealing and intuitive interfaces, ensuring that every interaction is seamless and engaging.
            </p>
            <p>
              Finally, some quick bits about me:
            </p>
            <ul>
              <li>B.Tech. in Computer Engineering</li>
              <li>UI/UX Designer</li>
              <li>Full Stack Developer</li>
              <li>Machine Learning Engineer</li>
              <li>Department 3rd Rank in 1st Semester</li>
            </ul>
          </div>
          <img src={profilePicture} alt="About Me" className="profile-picture" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <i className="fab fa-js"></i> JavaScript
          </div>

          <div className="skill-item">
            <i className="fab fa-react"></i> React
          </div>

          <div className="skill-item">
            <i className="fas fa-database"></i> PostgreSQL
          </div>

          <div className="skill-item">
            <i className="fab fa-css3-alt"></i> Tailwind CSS
          </div>

          <div className="skill-item">
            <i className="fab fa-figma"></i> Figma
          </div>

          <div className="skill-item">
            <i className="fab fa-git"></i> Git
          </div>

          <div className="skill-item">
            <i className="fab fa-python"></i> Python
          </div>

          <div className="skill-item">
            <i className="fas fa-database"></i> MySQL
          </div>

          <div className="skill-item">
            <i className="fab fa-cuttlefish"></i> C++
          </div>

          <div className="skill-item">
            <i className="fas fa-brain"></i> Machine Learning
          </div>

          <div className="skill-item">
            <i className="fas fa-microphone"></i> Public Speaking
          </div>

          <div className="skill-item">
            <i className="fas fa-calendar-alt"></i> Event Management
          </div>
        
          <div className="skill-item">
            <i className="fas fa-users"></i> Leadership
          </div>

          <div className="skill-item">
            <i className="fas fa-brain"></i> TensorFlow
          </div>

          <div className="skill-item">
            <i className="fas fa-brain"></i> PyTorch
          </div>

          <div className="skill-item">
            <i className="fab fa-django"></i> Django
          </div>

          <div className="skill-item">
            <i className="fas fa-flask"></i> Flask
          </div>

          <div className="skill-item">
            <i className="fas fa-server"></i> REST APIs
          </div>

          <div className="skill-item">
            <i className="fas fa-chart-bar"></i> Data Analysis
          </div>

          <div className="skill-item">
            <i className="fas fa-comment-dots"></i> NLP
          </div>

          <div className="skill-item">
            <i className="fas fa-desktop"></i> Streamlit
          </div>

          <div className="skill-item">
            <i className="fas fa-spider"></i> Web Scraping
          </div>

          <div className="skill-item">
            <i className="fas fa-chart-line"></i> Tableau
          </div>
        </div>
      </section>

      

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2>Experience</h2>
        <div className="experience-card">
          <h3>Technical Intern (Backend)</h3>
          <p>VidyaSagar NGO</p>
          <p>June 2024 - July 2024</p>
          <ul>
            <li>Developed and maintained backend systems using Django and PostgreSQL</li>
            <li>Implemented RESTful APIs for data management and user authentication</li>
            <li>Collaborated with the team to optimize database performance</li>
          </ul>
          <img src={vidyasagarLogo} alt="VidyaSagar CSO" className="experience-logo" />
        </div>
        
        <div className="experience-card">
          <h3>Research Intern</h3>
          <p>MIT Square, London (Remote)</p>
          <p>Sep 2023 - Dec 2023</p>
          <ul>
            <li>Conducted research on energy-efficient data center cooling technologies, focusing on a hybrid sustainable closed-loop water system that minimizes freshwater consumption by recycling up to 95% of water and integrating renewable energy.</li>
            <li>Published findings demonstrating a potential reduction in water usage by 90% and energy savings of over 25% with CCHP systems.</li>
            <li>Led a team of 4 students, earning the 'Best Intern Team of the Year' award for innovation and effective collaboration.</li>
          </ul>
          <img src={mitSquareLogo} alt="MIT Square" className="experience-logo" />
        </div>
   
        <div className="experience-card">
          <h3>President</h3>
          <p>Developer Students Club, SRM IST Ramapuram</p>
          <p>Feb 2023 - Apr 2025</p>
          <ul>
            <li>Leading the Developer Student Club, formerly 'Google Developer Student Clubs'.</li>
            <li>Led a community of 1500+ students, managed a team of 40 people organizing workshops, technical events and hackathons.</li>
            <li>Collaborated with industry professionals and faculty to create an engaging learning environment and promote skill development among members.</li>
          </ul>
          <img src={dscLogo} alt="Developer Students Club" className="experience-logo" />
        </div>
      </section>


        
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        
        <div className="projects-grid">
          {/* Project Card 1 */}
          <div className="project-card">
            <img src={projectImage1} alt="Seraphina: Postpartum Depression Prediction" className="project-image" />
            <div className="project-details">
              <h3>Seraphina: Postpartum Depression Prediction with Guidance Model</h3>
              <p>Recognition: Secured 1st Place in Women TechMakers Hackathon.</p> 
  
              <p>Platform Type: Machine learning-based tool to predict postpartum depression risk and provide personalized mental health guidance for new mothers.</p>
          
              <p>Features: Includes depression risk prediction, personalized mental health tips, and real-time analysis based on user input.</p>
              <p>Tech Stack: Backend developed with Python, machine learning using Scikit-learn, and Random Forest algorithm for predictions, frontend built with Streamlit.</p>
              
              <div className="project-links">
                <a href="https://seraphina.streamlit.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
                <a href="https://github.com/prashx1908/Seraphina" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="project-card">
            <img src={projectImage2} alt="FinLit: Financial Literacy Platform" className="project-image" />
            <div className="project-details">
              <h3>FinLit: Financial Literacy Platform</h3>
              <p>Platform Type: Django-based financial management tool designed to help users track their expenses and make informed investment decisions.</p>
              <p>Features: Includes an expenditure tracker, personalized investment recommendations, community forum, educational financial resources, and an AI-powered chatbot for real-time assistance.</p>
              <p>Tech Stack: Backend built with Django, frontend using HTML, CSS, JavaScript, database on PostgreSQL, and visualizations via Matplotlib.</p>
              <div className="project-links">
                <a href="https://finlit-entropy.onrender.com/" target="_blank" rel="noopener noreferrer">Project Link</a>
                <a href="https://github.com/prashx1908/FinLit_Entropy" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="project-card">
            <img src={projectImage3} alt="WorkZen: Developer Productivity Prediction" className="project-image" />
            <div className="project-details">
              <h3>WorkZen: Developer Productivity Prediction</h3>
              <p>Platform Type: Machine learning model designed to predict developer work-life balance and provide personalized productivity recommendations.</p>
              <p>Features: Predicts developer productivity, offers personalized guidance for better work-life balance, and provides actionable insights.</p>
              <p>Tech Stack: Developed with Python, machine learning model built using Scikit-learn and Random Forest Algorithm, frontend interface built with Streamlit.</p>
              <div className="project-links">
                <a href="https://workzendevshouse-gf9k45uspbov3nj2z7m3tr.streamlit.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
                <a href="https://github.com/prashx1908/Workzen_Devshouse" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="project-card">
            <img src={projectImage4} alt="Vidyasagar Dashboard" className="project-image" />
            <div className="project-details">
              <h3>Vidyasagar Dashboard</h3>
              <p>Technical Internship Project</p>
              <p>The Vidyasagar Dashboard is a comprehensive web portal meticulously designed to streamline and enhance student data management for educational institutions.</p>
              <p>The Vidyasagar Student Management Dashboard includes three distinct login portals, each catering to different user roles within the educational institution: Student/Parent, Teacher, and Management. Each login offers unique features and functionalities.</p>
              <p>Employed Python, Django, and PostgreSQL to build the application, The front-end is built with HTML and CSS for a responsive, user-friendly interface. Focusing on creating a scalable architecture that maintained high performance under increasing user loads.</p>
            </div>
          </div>
          
          {/* Project Card 5 - BalancePro */}
          <div className="project-card">
          <img src={projectImage5} alt="Vidyasagar Dashboard" className="project-image" />
            <div className="project-details">
              <h3>BalancePro: Work-Life Balance Prediction</h3>
              <p>Platform Type: ML-powered tool that uses scientifically-backed metrics to analyze work habits and predict overall work-life balance status.</p>
              <p>Features: Interactive Flask web application that predicts work-life balance scores using Random Forest models trained on 21 important parameters.</p>
              <p>Tech Stack: Engineered backend logic for input normalization, score interpretation, and dynamic rendering using Jinja2 templates, achieving 91% accuracy and providing actionable lifestyle feedback.</p>
              <div className="project-links">
                <a href="https://balancepro.onrender.com" target="_blank" rel="noopener noreferrer">Project Link</a>
                <a href="https://github.com/prashx1908/BalancePro" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </div>
            </div>
          </div>
          
          {/* Project Card 6 - Speech to Text Converter */}
          <div className="project-card">
          <img src={projectImage6} alt="Vidyasagar Dashboard" className="project-image" />
            <div className="project-details">
              <h3>Enchanta Verse: Speech to Text Converter</h3>
              <p>Platform Type: Python-based speech recognition application that accurately converts spoken language to text.</p>
              <p>Features: Real-time transcription, multiple language support, and user-friendly interface.</p>
              <p>Tech Stack: Developed using Python with speech recognition libraries, providing seamless conversion of audio to text.</p>
              <div className="project-links">
                <a href="https://github.com/prashx1908/EnchantaVerse" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </div>
            </div>
          </div>
          
          {/* Project Card 7 - Lab Report Processing */}
          <div className="project-card">
          <img src={projectImage7} alt="Vidyasagar Dashboard" className="project-image" />
            <div className="project-details">
              <h3>Lab Report Data Extraction</h3>
              <p>Platform Type: Image processing solution that extracts lab test data from medical reports.</p>
              <p>Features: Extracts test names, values, and reference ranges from lab report images and identifies out-of-range values.</p>
              <p>Tech Stack: Utilizes Optical Character Recognition (OCR) to extract data and exposes it through a FastAPI-based service that returns structured JSON data.</p>
              <div className="project-links">
                <a href="https://github.com/prashx1908/LabReportExtractor" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
<section id="hackathons" className="hackathons-section">
  <h2>Hackathons</h2>
  <div className="hackathons-grid">
    <div className="hackathon-card">
      <img src={hackathonImage1} alt="WTM She Innovates Hackathon" className="hackathon-image" />
      <h3>WTM She Innovates Hackathon</h3>
      <p>1st Place</p>
      <p>Developed Seraphina: A postpartum depression prediction model that uses machine learning to assess risk factors and provide personalized mental health guidance.</p>
    </div>

    <div className="hackathon-card">
      <img src={hackathonImage2} alt="Entropy'24 Hackathon" className="hackathon-image" />
      <h3>Entropy'24 Hackathon - VIT Chennai</h3>
      <p>Top 20 out of 100 Teams</p>
      <p>Developed FinLit: An AI & ML-based financial literacy platform for expense tracking and investment insights, resulting in 30% decrease in financial planning time.</p>
    </div>

    <div className="hackathon-card">
      <img src={hackathonImage3} alt="DevsHouse Hackathon" className="hackathon-image" />
      <h3>DevsHouse Hackathon</h3>
      <p>Finalist</p>
      <p>Built WorkZen: A developer productivity prediction tool using machine learning to analyze work habits and provide recommendations for better work-life balance.</p>
    </div>

    <div className="hackathon-card">
      <img src={hackathonImage6} alt="DIMO Hacks" className="hackathon-image" />
      <h3>DIMO Hacks - VIT AP</h3>
      <p>Participant</p>
      <p>Developed a Web3-based blockchain hospital record management system for secure and transparent healthcare data management.</p>
    </div>

    <div className="hackathon-card">
      <img src={hackathonImage4} alt="TRINIT Hackathon" className="hackathon-image" />
      <h3>TRINIT Hackathon - NIT Trichy</h3>
      <p>Finalist</p>
      <p>Built an Agriculture Prediction System leveraging machine learning to forecast crop yields, weather patterns, and market trends to optimize farming practices.</p>
    </div>

    <div className="hackathon-card">
    <img src={hackathonImage5} alt="TRINIT Hackathon" className="hackathon-image" />
      <h3>SRM FinTech Hackathon</h3>
      <p>Finalist</p>
      <p>Advanced to the final round with an innovative fintech solution leveraging machine learning for financial data analysis.</p>
    </div>
  </div>
</section>

      {/* Certifications Section */}
<section id="certifications" className="certifications-section">
  <h2>Certifications</h2>
  <div className="certifications-grid">
    <div className="certification-card">
      <img src={certImage1} alt="Machine Learning A-Z Certificate" className="certification-image" />
      <h3>Machine Learning A-Z</h3>
      <p>Udemy</p>
      <p>Comprehensive course covering various machine learning algorithms, data preprocessing, and model evaluation techniques.</p>
    </div>
    
    <div className="certification-card">
      <img src={certImage2} alt="Product Design Certificate" className="certification-image" />
      <h3>Product Design</h3>
      <p>Accenture North America</p>
      <p>Learned product design fundamentals, user experience principles, and design thinking methodologies.</p>
    </div>
    
    <div className="certification-card">
      <img src={certImage3} alt="Data Analytics Certificate" className="certification-image" />
      <h3>Data Analytics</h3>
      <p>Deloitte</p>
      <p>Gained practical experience in data analysis techniques, visualization, and interpretation for business insights.</p>
    </div>
    
    <div className="certification-card">
      <img src={certImage4} alt="Code Vipasanna Certificate" className="certification-image" />
      <h3>Code Vipasanna Duet AI Season 5</h3>
      <p>Exceptional Performance</p>
      <p>Recognized for exceptional coding skills and problem-solving abilities.</p>
    </div>
    
    <div className="certification-card">
      <img src={certImage5} alt="NLP Course Certificate" className="certification-image" />
      <h3>NLP Course</h3>
      <p>Intellipaat</p>
      <p>Comprehensive training in Natural Language Processing techniques and applications.</p>
    </div>
    
    <div className="certification-card">
      <img src={certImage6} alt="Machine Learning Introduction Certificate" className="certification-image" />
      <h3>Machine Learning Introduction</h3>
      <p>IBM</p>
      <p>Introduction to machine learning concepts, algorithms, and applications for everyone.</p>
    </div>
    
    <div className="certification-card">
      <img src={certImage7} alt="Learn Python Certificate" className="certification-image" />
      <h3>Learn Python</h3>
      <p>CodeChef</p>
      <p>Mastered Python programming fundamentals and advanced concepts.</p>
    </div>
    
    <div className="certification-card">
      <img src={certImage8} alt="Digital Components Certificate" className="certification-image" />
      <h3>Digital Components System Architecture</h3>
      <p>Great Learning</p>
      <p>In-depth understanding of computer architecture and digital system components.</p>
    </div>
    
    <div className="certification-card">
      <img src={certImage9} alt="Database Management Certificate" className="certification-image" />
      <h3>Database Management Systems</h3>
      <p>Certificate</p>
      <p>Comprehensive understanding of database design, implementation, and management.</p>
    </div>

    <div className="certification-card">
      <img src={certImage10} alt="Best Intern Team of the Year" className="certification-image" />
      <h3>Best Intern Team of the Year</h3>
      <p>MIT Square Research Internship</p>
      <p>Recognized for outstanding team collaboration and innovative research contributions in sustainable data center cooling technologies.</p>
    </div>

    <div className="certification-card">
      <img src={certImage11} alt="Cisco Python Essentials" className="certification-image" />
      <h3>Cisco Python Essentials 1</h3>
      <p>Cisco Networking Academy</p>
      <p>Foundational Python programming skills including syntax, semantics, and the runtime environment.</p>
    </div>

    <div className="certification-card">
      <img src={certImage12} alt="TEXUS'24 Technical Event Volunteer" className="certification-image" />
      <h3>TEXUS'24 Technical Event Volunteer</h3>
      <p>Developer Students Club</p>
      <p>Conducted IdeaForge, an ideathon event with full capacity participation, facilitating innovative thinking and project development.</p>
    </div>

    <div className="certification-card">
      <img src={certImage13} alt="MIT Internship Joining Letter" className="certification-image" />
      <h3>MIT Square Research Internship</h3>
      <p>Joining Letter</p>
      <p>Official documentation of appointment as a research intern at MIT Square, focusing on sustainable data center technologies.</p>
    </div>

    <div className="certification-card">
      <img src={certImage14} alt="TEXUS'23 Volunteer" className="certification-image" />
      <h3>TEXUS'23 Technical Event Volunteer</h3>
      <p>Google Developer Student Club</p>
      <p>Organized and facilitated a technical quiz event, enhancing student engagement and knowledge-sharing within the tech community.</p>
    </div>
  </div>
</section>
      <section id="contact">
        <div className="contact-container">
          <h2>Connect With Me!</h2>
          <p>
            Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:prashanth.dev1908@gmail.com">prashanth.dev1908@gmail.com</a>
            </div>
            
            <div className="social-icons">
              <a href="https://x.com/Prashanthg1908" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/prashanth-g-399225202/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/prashx1908" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://leetcode.com/u/prashx1908/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-code"></i>
              </a>
            </div>
          </div>
          <footer>
            <p>© 2024 | Prashanth</p>
          </footer>
        </div>
      </section>
    </main>
  </>
  );
};

export default Header;
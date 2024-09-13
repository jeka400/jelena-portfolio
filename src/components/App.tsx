import React from 'react';
import '../styles/App.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'; 
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import "../styles/Footer.css";
import "../styles/Skills.css";
import "../styles/About.css";
import Navigation from './Navigation';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';


const App: React.FC = () => {
  return (
    <Container fluid className="main-container">
      <div>
        <Navigation />
        <AboutSection />
        <EducationSection />


     <Container id="skills">
      <Row className="skills-section">
        <Col>
          <h2>Technical Skills</h2>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>React Native</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
            <li>SASS</li>
            <li>BigCommerce</li>
            <li>Git</li>
            <li>Photoshop</li>
            <li>Bootstrap</li>
            <li>MailChimp</li>
            <li>Klaviyo</li>
          </ul>
        </Col>
      </Row>
      </Container>

      <ExperienceSection />
      <ContactSection />

      <footer className="footer">
        <div className="social-links">
          <a href="https://linkedin.com/in/jelena-petkovic" target="_blank" >
            <FaLinkedin />
          </a>
          <a href="https://github.com/jelenapetkovic" target="_blank" >
            <FaGithub />
          </a>
          <a href="mailto:jelenakrstic164@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+381641234567">
            <FaPhone />
          </a>
        </div>
        <p>&copy; 2024 Jelena Petkovic. All rights reserved.</p>
      </footer>
      </div>

    </Container>
  );
};

export default App;

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../styles/About.css'; 

const IntroSection: React.FC = () => {
  return (
    <div id="intro" >
      <Container className="intro-section">
      <Row className="intro-row">
      <Col md={6} className="intro-text">
        <h1>Jelena Petkovic</h1>
        <h3>Frontend Developer</h3>
        <p>
          Experienced in creating high-quality responsive websites.
        </p>
        <p>
          I am a Front-End Developer from Niš with a Bachelor's degree in Software 
          Engineering and over five years of professional experience as a 
          Software Developer. I specialize in building high-quality, 
          responsive websites with an emphasis on clean code and 
          user-centric design. My technical toolkit includes HTML5, 
          CSS3, React, JavaScript, TypeScript, and more.
        </p>
      </Col>
      <Col md={6} className="intro-image">
        <img src="/jelena-photo.jpg" alt="Jelena Petkovic" className="profile-image img-fluid" />
      </Col>
      </Row>
      </Container>
      
    </div>
  );
};

export default IntroSection;

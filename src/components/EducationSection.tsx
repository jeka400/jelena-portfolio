import React from 'react';
import '../styles/Education.css';
import { Container } from "react-bootstrap";

const EducationSection: React.FC = () => {
  return (
    <Container id="education">

    <div className="education-section">
      <h2>Education</h2>
      <div className='education-items'>
      <div className="education-item">
        <h3>Faculty of Science and Mathematics</h3>
        <h4>Bachelor of Science</h4>
        <p>Nis, 2018</p>
      </div>
      <div className="education-item">
        <h3>Grammar School</h3>
        <p>Krusevac,2011</p>
      </div>
      </div>
      
    </div>
    </Container>

  );
};

export default EducationSection;

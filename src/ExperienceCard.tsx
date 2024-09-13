import React, { useState } from 'react';
import './styles/Experience.css'

interface ExperienceCardProps {
  company: string;
  years: string;
  role: string;
  description: string;
  responsibilities: string[];
  technologies: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, years, role, description, responsibilities, technologies }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`experience-card ${showMore ? 'open' : ''}`}>
      <h3>{company} - {role}</h3>
      <p className="years">{years}</p>
      <p className="description">{showMore ? description : `${description.substring(0, 100)}...`}</p>
      <button className="read-more-btn" onClick={handleToggle}>
        {showMore ? 'Show Less' : 'Read More'}
      </button>
      {showMore && (
        <div className="additional-info">
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
          <p className="technologies">Technologies: {technologies}</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;

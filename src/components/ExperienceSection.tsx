import React, {useRef, useEffect} from 'react';

import ExperienceCard from '../ExperienceCard';
import '../styles/Experience.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'Ingsoftware',
      years: '2019 - Present',
      role: 'Frontend Developer',
      description: 'Auvere is a sophisticated e-commerce platform specializing in sculptural and refined 22K and 24K gold jewelry. The brand was co-founded by renowned accessories designer Gina Love and her partner, Steven Feldman.',
      responsibilities: [
        'Developed and implemented new site pages, enhancing user experience and visual appeal.',
        'Designed and integrated custom front-end solutions tailored to the brands luxury market.',
        'Worked closely with the BigCommerce platform for seamless e-commerce functionality.',
        'Created and managed newsletters for new campaigns, ensuring consistent brand messaging.',
        'Provided ongoing website maintenance and support to ensure optimal performance and security.'
      ],
      technologies: 'HTML5, CSS3, SCSS, JavaScript, jQuery, Stencil, BigCommerce, Git, Klaviyo, Sumo, Photoshop'
    },
    {
      company: 'Ingsoftware',
      years: '2019 - 2019',
      role: 'Frontend Intern',
      description: 'Graxpo project: Conversion of PSD designs into fully functional web pages, focusing on pixel-perfect implementation.',
      responsibilities: [
        'Transformed Photoshop Document (PSD) designs into responsive web pages using HTML, CSS, and JavaScript.',
        'Collaborated in a small team environment to deliver high-quality front-end code.',
      ],
      technologies: 'HTML5, CSS3, JavaScript, jQuery, Git, Sass, Bootstrap'
    },
    {
      company: 'Ingsoftware',
      years: '2019 - 2019',
      role: 'Frontend Intern',
      description: 'Beer Shop project: Developed a website that mirrored the style and functionality of Brewery using Punk API.',
      responsibilities: [
        'Transformed Photoshop Document (PSD) designs into responsive web pages using HTML, CSS, and JavaScript.',
        'Collaborated in a small team environment to deliver high-quality front-end code.',
        'Created a responsive and dynamic website that met the project’s design and functionality requirements.',
        'Integrated the Punk API to display relevant beer-related information. '
      ],
      technologies: 'HTML5, CSS3, JavaScript, jQuery, Git, Sass, Bootstrap'
    },
    {
      company: 'Freelance',
      years: '2019 - Present',
      role: 'Frontend Developer',
      description: 'Gugo is a comprehensive eCommerce application allowing users to order groceries from various shops, with options for delivery or in-store pickup. It supports both Android and iOS through a React Native mobile app.',
      responsibilities: [
        'Developed and maintained the website and mobile application, ensuring a seamless user experience across platforms.',
        'Implemented front-end features that enhanced the functionality and usability of the application.'
      ],
      technologies: 'React Native, HTML5, CSS3, JavaScript, Git'
    },
    {
      company: 'Freelance',
      years: '2017',
      role: 'Frontend Developer',
      description: 'An online platform for English teachers, providing a space to share resources, ideas, and job opportunities.',
      responsibilities: [
        'Designed and implemented the front-end of the website, ensuring a user-friendly interface.',
        'Worked on optimizing the platform for performance and accessibility.'
      ],
      technologies: 'HTML5, CSS3, JavaScript, Git'
    }
  ];

  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 } 
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Container id="experience">
      <div className="experience-section">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card-item"
              ref={(el) => (experienceRefs.current[index] = el)}
            >
              <ExperienceCard
                company={exp.company}
                years={exp.years}
                role={exp.role}
                description={exp.description}
                responsibilities={exp.responsibilities}
                technologies={exp.technologies}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;
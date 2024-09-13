import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css';
import { Container, Row, Col } from 'react-bootstrap';

const ContactSection: React.FC = () => {
  const contactInfoRef = useRef<HTMLDivElement | null>(null);
  const contactFormRef = useRef<HTMLDivElement | null>(null);

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

    if (contactInfoRef.current) {
      observer.observe(contactInfoRef.current);
    }
    if (contactFormRef.current) {
      observer.observe(contactFormRef.current);
    }

    return () => {
      if (contactInfoRef.current) {
        observer.unobserve(contactInfoRef.current);
      }
      if (contactFormRef.current) {
        observer.unobserve(contactFormRef.current);
      }
    };
  }, []);

  return (
    <section  id="contact">
        <Container className='contact-section'>
      <div className="contact-info-container" ref={contactInfoRef}>
        <h2 className='contact-h2'>Contact Me</h2>
        <Row>
            <Col>
                <div className='contact-info'>
                    <FontAwesomeIcon icon={faAddressCard} className='icon' />
                    <p>Nis, Serbia</p>
                </div>
                <div className='contact-info'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    <p><a href="mailto:jelenakrstic164@gmail.com">jelenakrstic164@gamil.com</a></p>
                </div>
                <div className='contact-info'>
                    <FontAwesomeIcon icon={faPhoneAlt} className='icon' />
                    <p><a href="tel:+123456789">+123 456 789</a></p>
                </div>
            </Col>
            <Col>
            <div>
            <div className='contact-info'>

                <a href="https://www.linkedin.com/in/jelena-krstic164/" target="_blank" >
                    <FontAwesomeIcon icon={faLinkedin} className='icon' />
                    /in/jelena-krstic164/
                </a>
                </div>
                <div className='contact-info'>

                <a href="https://github.com/jeka400" target="_blank" >
                    <FontAwesomeIcon icon={faGithub} className='icon' />
                    /jeka400
                </a>
                </div>
                </div>
            </Col>
        </Row>
        
        
      </div>
      <div className="contact-form" ref={contactFormRef}>
        <h2>Send Me a Message</h2>
        <form
          action=""
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      </Container>
    </section>
  );
};

export default ContactSection;

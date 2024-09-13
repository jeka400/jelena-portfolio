import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';
import { Container } from "react-bootstrap";

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className={scrolled ? 'nav scrolled' : 'nav'}>

    <nav >
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#intro">About Me</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Technical Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </Container>

  );
};

export default Navigation;

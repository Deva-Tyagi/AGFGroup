import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={() => scrollToSection('home')}>AGF Group</a>
        </div>
        
        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          {/* <li><a href="#profit-plan" onClick={() => scrollToSection('profit-plan')}>Profit Plan</a></li> */}
          {/* <li><a href="#investment" onClick={() => scrollToSection('investment')}>Investment</a></li> */}
          <li><a href="#security" onClick={() => scrollToSection('security')}>Security</a></li>
          <li><a href="#benefits" onClick={() => scrollToSection('benefits')}>Benefits</a></li>
          {/* <li><a href="#process" onClick={() => scrollToSection('process')}>Process</a></li> */}
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
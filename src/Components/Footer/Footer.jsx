import React from 'react';
import './Footer.css';
import logo from '../Images/agfLogo.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-center">
            <div className="footer-logo">
              <img src={logo} alt="AGF Logo" />
            </div>
            <div className="footer-description">
              <p>AGF Group, with 15+ years of expertise, delivers premium residential and investment spaces across India’s top locations.
Blending luxury, legal transparency, and strategic planning, we create projects that promise long-term value.
From Noida to Goa, we build vibrant communities that elevate lifestyles and secure legacies.</p>
             
            </div>
          </div>
          
          {/* <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Contact Info</h4>
              <ul>
                <li>Email: info@agfgroup.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Location: New York, NY</li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} AGF Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
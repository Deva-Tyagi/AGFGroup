import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            {/* Logo */}
          </div>
          <div className="footer-links">
            {/* Navigation links */}
          </div>
          <div className="footer-social">
            {/* Social links */}
          </div>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} AGF Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
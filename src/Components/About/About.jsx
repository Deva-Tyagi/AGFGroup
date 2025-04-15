import React from 'react';
import './About.css';

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <div className="container">
        <h2>About AGF Group</h2>
        <div className="about-content">
          <div className="about-text">
            <p>AGF Group is a reputed real estate development company with over 8 years of experience in the real estate market, primarily in Noida, Uttarakhand, and Himachal Pradesh. We're now expanding our operations into Goa and Punjab, further solidifying our footprint in the Indian real estate market.</p>
          </div>
          <div className="about-image">
            {/* Company image placeholder */}
          </div>
        </div>
        <div className="timeline">
          {/* Timeline elements would go here */}
        </div>
      </div>
    </section>
  );
};

export default About;
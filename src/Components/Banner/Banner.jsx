import React from 'react';
import './Banner.css';

const Banner = ({ id }) => {
  return (
    <section id={id} className="hero-section">
      <div className="hero-overlay">
        <h1>AGF Group Noida</h1>
        <h2>Premium Real Estate Investments with Guaranteed Returns</h2>
        <p>Over 8 years of excellence in real estate development</p>
        <button className="cta-button" onClick={() => document.getElementById('profit-plan').scrollIntoView({ behavior: 'smooth' })}>
          Explore Our Granted Profit Plan
        </button>
      </div>
    </section>
  );
};

export default Banner;
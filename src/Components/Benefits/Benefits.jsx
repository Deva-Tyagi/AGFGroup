import React from 'react';
import './Benefits.css';

const Benefits = ({ id }) => {
  return (
    <section id={id} className="benefits-section">
      <div className="container">
        <h2>Key Benefits for Investors</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">{/* Icon */}</div>
            <h3>Attractive Returns</h3>
            <p>Receive a attractive return on your invested amount, providing a lucrative return compared to traditional investment avenues.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">{/* Icon */}</div>
            <h3>Security of Investment</h3>
            <p>Real estate plots equivalent to the investment amount ensure investor safety and security.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">{/* Icon */}</div>
            <h3>Transparent and Reliable</h3>
            <p>Over 8 years of experience ensures your investment is in reliable hands.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">{/* Icon */}</div>
            <h3>Flexible Investment Tenure</h3>
            <p>Choose from 1 to 3 years based on your financial goals.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">{/* Icon */}</div>
            <h3>Option to Retain Plots</h3>
            <p>Retain security plots by notifying AGF Group 6 months in advance.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">{/* Icon */}</div>
            <h3>Strong Growth Prospects</h3>
            <p>Benefit from growth in new and high-potential real estate markets.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
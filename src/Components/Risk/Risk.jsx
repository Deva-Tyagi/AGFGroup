import React from 'react';
import './Risk.css';

const Risk = ({ id }) => {
  return (
    <section id={id} className="risk-section">
      <div className="container">
        <h2>Risk Mitigation</h2>
        <div className="risk-items">
          <div className="risk-item">
            <div className="risk-icon">{/* Icon */}</div>
            <h3>AGF Group's Track Record</h3>
            <p>With 8+ years of experience in the real estate sector, AGF Group has a proven ability to execute and complete projects successfully.</p>
          </div>
          <div className="risk-item">
            <div className="risk-icon">{/* Icon */}</div>
            <h3>Secured Investment</h3>
            <p>The provision of real estate plots as security ensures that investors have tangible collateral.</p>
          </div>
          <div className="risk-item">
            <div className="risk-icon">{/* Icon */}</div>
            <h3>Legal Protections</h3>
            <p>All investments are protected by legally binding agreements, ensuring both parties' interests are safeguarded.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Risk;
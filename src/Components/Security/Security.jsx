import React from 'react';
import './Security.css';

const Security = ({ id }) => {
  return (
    <section id={id} className="security-section">
      <div className="container">
        <h2>Investment Security</h2>
        <div className="security-content">
          <div className="security-text">
            <p>As part of this investment plan, AGF Group will provide plots equivalent to the investment amount as security to the investor. These plots will act as collateral for the investment.</p>
            <p>At the end of the investment term, the security plots will be returned to AGF Group unless the investor decides to keep them by notifying us 6 months prior to the expiration of the investment term.</p>
          </div>
          <div className="security-image">
            {/* Security plot image placeholder */}
          </div>
        </div>
        <div className="process-diagram">
          {/* Diagram elements would go here */}
        </div>
      </div>
    </section>
  );
};

export default Security;
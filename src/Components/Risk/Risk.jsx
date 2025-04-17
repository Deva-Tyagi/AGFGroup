import React from 'react';
import './Risk.css';
import agreement from '../Images/rental.png';
import transparent from '../Images/handshake.png';
import registry from '../Images/validation.png';

const Risk = ({ id }) => {
  return (
    <section id={id} className="risk-section">
      <div className="risk-overlay">
        <div className="container">
          <div className='risk-header'>
            <h2>Risk Mitigation</h2>
            <h3>Minimizing Risks, Maximizing Trust</h3>
            <p>At AGF Group, safeguarding your investment is our top priority. Here's how we reduce investor risk</p>
          </div>
          <div className="risk-items">
            <div className="risk-item">
              <div className="risk-icon">
                <img src={agreement} alt="Legally-Bound Agreements" />
              </div>
              <h3>Legally-Bound Agreements</h3>
              <p>All deals are sealed with clear, enforceable MoUs, ensuring legal protection from start to finish.</p>
            </div>
            <div className="risk-item">
              <div className="risk-icon">
                <img src={transparent} alt="Transparent Legal Titles" />
              </div>
              <h3>Transparent Legal Titles</h3>
              <p>No hidden clauses, no murky paperwork — we guarantee full documentation and due diligence.</p>
            </div>
            <div className="risk-item">
              <div className="risk-icon">
                <img src={registry} alt="Instant Possession Registry" />
              </div>
              <h3>Instant Possession Registry</h3>
              <p>Immediate ownership reduces risk of delays and maximizes investor control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Risk;
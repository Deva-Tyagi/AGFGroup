import React from 'react';
import './Process.css';

const Process = ({ id }) => {
  return (
    <section id={id} className="process-section">
      <div className="container">
        <div className="section-header">
          <h2>Investment Process</h2>
          <div className="header-underline"></div>
        </div>
        
        <div className="process-timeline">
          <div className="process-step">
            <div className="step-icon-container">
              <div className="step-icon">1</div>
            </div>
            <div className="step-content">
              <h3>Investment Agreement</h3>
              <p>Sign a Memorandum of Understanding (MOU) outlining the terms and conditions of the investment.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-icon-container">
              <div className="step-icon">2</div>
            </div>
            <div className="step-content">
              <h3>Security Transfer</h3>
              <p>AGF Group will transfer the security plots to you as collateral against the investment.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-icon-container">
              <div className="step-icon">3</div>
            </div>
            <div className="step-content">
              <h3>Profit Distribution</h3>
              <p>At the end of the selected investment term, profits will be distributed to you.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-icon-container">
              <div className="step-icon">4</div>
            </div>
            <div className="step-content">
              <h3>Cancellation of MOU <span className="subtitle">(if applicable)</span></h3>
              <p>If you wish to retain the security plots, inform AGF Group 6 months prior to the end of the investment term.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
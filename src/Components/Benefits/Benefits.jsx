import React from 'react';
import './Benefits.css';
import provenLogo from '../Images/competition.png'
import locationLogo from '../Images/location (1).png'
import returnLogo from '../Images/rupee.png'
import secureLogo from '../Images/house-key.png'
import growthLogo from '../Images/bar-chart.png'
import investorLogo from '../Images/agreement.png'

const Benefits = ({ id }) => {
  return (
    <section id={id} className="benefits-section">
      <div className="container">
        <h2>Key Benefits for Investors</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon"><img src={provenLogo} /></div>
            <h3>Proven Excellence</h3>
            <p>15+ years of successful project delivery across prime locations.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><img src={locationLogo} /></div>
            <h3>Strategic Locations</h3>
            <p>Properties near Jewar Airport, highways, and metros — ensuring long-term value..</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><img src={returnLogo} /></div>
            <h3>Assured Returns</h3>
            <p>Profit-guaranteed investment plans backed by real estate assets.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><img src={secureLogo} /></div>
            <h3>Secure Ownership</h3>
            <p>Immediate registry and possession with clear titles and documentation.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><img src={investorLogo} /></div>
            <h3>Investor-First Approach</h3>
            <p>Transparent MoUs, plot-based security, and legal safeguards built in.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><img src={growthLogo} /></div>
            <h3>High Growth Potential</h3>
            <p>Projects in emerging hotspots like Jewar and Almora poised for exponential appreciation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
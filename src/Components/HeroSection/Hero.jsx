import React, { useState } from 'react';
import './Hero.css';
import heroImg from '../Images/heroImg.jpg'

const Hero = () => {
  const [investmentAmount, setInvestmentAmount] = useState(10000000); // Default 1 Crore
  const [tenure, setTenure] = useState(1);

  const calculateReturn = () => {
    switch(tenure) {
      case 1:
        return investmentAmount * 0.18;
      case 2:
        return investmentAmount * 0.40;
      case 3:
        return investmentAmount * 0.75;
      default:
        return 0;
    }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>AGF Group Noida</h1>
          <h2>Premium Real Estate Investments with Guaranteed Returns</h2>
          <p>Over 8 years of excellence in real estate development</p>
          <button className="cta-button">Explore Our Granted Profit Plan</button>
        </div>
        {/* Background video or image would go here */}
   
      </section>

      {/* About AGF Group */}
      <section className="about-section">
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

      {/* Granted Profit Plan Overview */}
      <section className="profit-plan-section">
        <div className="container">
          <h2>The Granted Profit Plan</h2>
          <p>AGF Group is offering an exclusive opportunity for investors to participate in its upcoming and existing real estate projects with attractive returns and robust security.</p>
          
          <div className="investment-range">
            <div className="range-item">
              <h3>Minimum Investment</h3>
              <p className="large-text">₹1 Crore</p>
            </div>
            <div className="range-item">
              <h3>Maximum Investment</h3>
              <p className="large-text">₹100 Crores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tenure Options */}
      <section className="tenure-section">
        <div className="container">
          <h2>Investment Tenure Options</h2>
          <div className="tenure-cards">
            <div className={`tenure-card ${tenure === 1 ? 'active' : ''}`} onClick={() => setTenure(1)}>
              <h3>1 Year</h3>
              <p className="profit-percentage">18%</p>
              <p>Profit on Investment</p>
            </div>
            <div className={`tenure-card ${tenure === 2 ? 'active' : ''}`} onClick={() => setTenure(2)}>
              <h3>2 Years</h3>
              <p className="profit-percentage">40%</p>
              <p>Profit on Investment</p>
            </div>
            <div className={`tenure-card ${tenure === 3 ? 'active' : ''}`} onClick={() => setTenure(3)}>
              <h3>3 Years</h3>
              <p className="profit-percentage">75%</p>
              <p>Profit on Investment</p>
            </div>
          </div>
          
          {/* Calculator */}
          <div className="calculator">
            <h3>Investment Calculator</h3>
            <div className="calculator-input">
              <label>Investment Amount (₹):</label>
              <input 
                type="number" 
                min="10000000" 
                max="1000000000" 
                step="1000000"
                value={investmentAmount} 
                onChange={(e) => setInvestmentAmount(e.target.value)} 
              />
            </div>
            <div className="calculator-result">
              <p>Selected Tenure: {tenure} {tenure === 1 ? 'Year' : 'Years'}</p>
              <p>Expected Return: ₹{calculateReturn().toLocaleString()}</p>
              <p>Total Value: ₹{(Number(investmentAmount) + calculateReturn()).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Plot Section */}
      <section className="security-section">
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

      {/* Key Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Key Benefits for Investors</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">{/* Icon */}</div>
              <h3>Attractive Returns</h3>
              <p>Receive up to 75% profit on your invested amount, providing a lucrative return compared to traditional investment avenues.</p>
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

      {/* Investment Process Steps */}
      <section className="process-section">
        <div className="container">
          <h2>Investment Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Investment Agreement</h3>
              <p>Sign a Memorandum of Understanding (MOU) outlining the terms and conditions of the investment.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Security Transfer</h3>
              <p>AGF Group will transfer the security plots to you as collateral against the investment.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Profit Distribution</h3>
              <p>At the end of the selected investment term, profits will be distributed to you.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Cancellation of MOU (if applicable)</h3>
              <p>If you wish to retain the security plots, inform AGF Group 6 months prior to the end of the investment term.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Previous Projects */}
      <section className="projects-section">
        <div className="container">
          <h2>Our Successful Projects</h2>
          <div className="projects-slider">
            {/* Project slides would go here */}
          </div>
        </div>
      </section>

      {/* Risk Mitigation Section */}
      <section className="risk-section">
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

      {/* Call to Action & Contact */}
      <section className="contact-section">
        <div className="container">
          <h2>Ready to Invest?</h2>
          <p>AGF Group's Granted Profit Plan offers investors a unique opportunity to earn high returns backed by tangible real estate assets. We invite you to become a part of AGF Group's expanding journey.</p>
          
          <div className="contact-container">
            <div className="contact-form">
              <h3>Contact Us</h3>
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="Your Phone Number" />
                </div>
                <div className="form-group">
                  <label>Investment Amount</label>
                  <select>
                    <option>₹1 Crore - ₹5 Crores</option>
                    <option>₹5 Crores - ₹10 Crores</option>
                    <option>₹10 Crores - ₹50 Crores</option>
                    <option>₹50 Crores - ₹100 Crores</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="submit-button">Send Inquiry</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p><strong>Phone:</strong> [Phone Number]</p>
              <p><strong>Email:</strong> [Email Address]</p>
              <p><strong>Website:</strong> [Website URL]</p>
              <div className="social-links">
                {/* Social media links would go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Hero;
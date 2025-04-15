import React, { useState } from 'react';
import './Tenure.css';

const Tenure = ({ id }) => {
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

  // Format currency in Indian format (e.g., 1,18,00,000)
  const formatIndianCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN').format(amount);
  };

  return (
    <section id={id} className="tenure-section">
      <div className="container">
        <h2 className="section-title">Investment Tenure Options</h2>
        <div className="accent-line"></div>
        
        <div className="tenure-cards">
          <div 
            className={`tenure-card ${tenure === 1 ? 'active' : ''}`} 
            onClick={() => setTenure(1)}
          >
            <div className="card-header">1 Year</div>
            <div className="card-body">
              <p className="profit-percentage">18%</p>
              <p className="profit-label">Profit on Investment</p>
            </div>
            {tenure === 1 && <div className="selection-indicator"></div>}
          </div>
          
          <div 
            className={`tenure-card ${tenure === 2 ? 'active' : ''}`} 
            onClick={() => setTenure(2)}
          >
            <div className="card-header">2 Years</div>
            <div className="card-body">
              <p className="profit-percentage">40%</p>
              <p className="profit-label">Profit on Investment</p>
            </div>
            {tenure === 2 && <div className="selection-indicator"></div>}
          </div>
          
          <div 
            className={`tenure-card ${tenure === 3 ? 'active' : ''}`} 
            onClick={() => setTenure(3)}
          >
            <div className="card-header">3 Years</div>
            <div className="card-body">
              <p className="profit-percentage">75%</p>
              <p className="profit-label">Profit on Investment</p>
            </div>
            {tenure === 3 && <div className="selection-indicator"></div>}
          </div>
        </div>
        
        <div className="calculator-wrapper">
          <div className="calculator-container">
            <h3 className="calculator-title">Investment Calculator</h3>
            
            <div className="calculator-body">
              <div className="input-group">
                <label htmlFor="investment-amount">Investment Amount (₹)</label>
                <div className="input-wrapper">
                  <span className="input-prefix">₹</span>
                  <input 
                    id="investment-amount"
                    type="number" 
                    min="10000000" 
                    max="1000000000" 
                    step="1000000"
                    value={investmentAmount} 
                    onChange={(e) => setInvestmentAmount(e.target.value)} 
                  />
                </div>
              </div>
              
              <div className="calculator-result">
                <div className="result-row">
                  <span className="result-label">Selected Tenure:</span>
                  <span className="result-value tenure-value">{tenure} {tenure === 1 ? 'Year' : 'Years'}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Expected Return:</span>
                  <span className="result-value">₹{formatIndianCurrency(calculateReturn())}</span>
                </div>
                <div className="result-row total-value">
                  <span className="result-label">Total Value:</span>
                  <span className="result-value">₹{formatIndianCurrency(Number(investmentAmount) + calculateReturn())}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tenure;
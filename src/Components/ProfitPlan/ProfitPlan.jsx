import React, { useEffect, useRef } from 'react';
import './ProfitPlan.css';

const ProfitPlan = ({ id }) => {
  const numberRef1 = useRef(null);
  const numberRef100 = useRef(null);
  
  // Animation for counting up numbers
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const animate = (targetRef, endValue) => {
      if (!targetRef.current) return;
      
      let startValue = 0;
      const duration = 2000;
      const increment = endValue / (duration / 30);
      let timer;
      
      const updateNumber = () => {
        startValue += increment;
        if (startValue < endValue) {
          targetRef.current.innerText = `₹${Math.floor(startValue)} ${endValue === 100 ? 'Crores' : 'Crore'}`;
          timer = setTimeout(updateNumber, 30);
        } else {
          targetRef.current.innerText = `₹${endValue} ${endValue === 100 ? 'Crores' : 'Crore'}`;
        }
      };
      
      updateNumber();
      return () => clearTimeout(timer);
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === numberRef1.current) {
            animate(numberRef1, 1);
          } else if (entry.target === numberRef100.current) {
            animate(numberRef100, 100);
          }
        }
      });
    }, options);
    
    if (numberRef1.current) observer.observe(numberRef1.current);
    if (numberRef100.current) observer.observe(numberRef100.current);
    
    return () => {
      if (numberRef1.current) observer.unobserve(numberRef1.current);
      if (numberRef100.current) observer.unobserve(numberRef100.current);
    };
  }, []);

  return (
    <section id={id} className="profit-plan-section">
      <div className="profit-container">
        <div className="profit-header">
          <h2 className="profit-title">The Granted Profit Plan</h2>
          <div className="underline-decoration">
            <span className="diamond"></span>
          </div>
        </div>
        
        <p className="profit-description">
          AGF Group is offering an exclusive opportunity for investors to participate in its 
          upcoming and existing real estate projects with attractive returns and robust security.
        </p>
        
        <div className="investment-cards">
          <div className="investment-card fadeIn">
            <div className="card-header">
              <h3>Minimum Investment</h3>
            </div>
            <div className="card-content">
              <p className="amount" ref={numberRef1}>₹1 Crore</p>
              <div className="glowing-border"></div>
            </div>
          </div>
          
          <div className="investment-card fadeIn delay">
            <div className="card-header">
              <h3>Maximum Investment</h3>
            </div>
            <div className="card-content">
              <p className="amount" ref={numberRef100}>₹100 Crores</p>
              <div className="glowing-border"></div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProfitPlan;
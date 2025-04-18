import React, { useState, useEffect } from 'react';
import './ChannelPartner.css';
import emailjs from 'emailjs-com';
import partner from '../Images/handshake.jpg'

const ChannelPartner = ({id}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Prevent body scrolling when popup is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showForm]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const nextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
    }
  };

  const prevStep = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', email: '' });
    setFormStep(0);
    setSubmitSuccess(false);
  };

  const closePopup = () => {
    setShowForm(false);
    setTimeout(resetForm, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send('service_k9ab8bk', 'template_63kra9e', formData, '-UzTIlfx2uPhW3BV0')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setTimeout(() => {
          closePopup();
        }, 3000);
      }, (error) => {
        console.log('FAILED...', error);
        setIsSubmitting(false);
        alert('Something went wrong. Please try again.');
      });
  };

  const renderFormStep = () => {
    switch(formStep) {
      case 0:
        return (
          <div className="form-step">
            <h4>Personal Information</h4>
            <div className="form-field">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-actions">
              <button 
                type="button" 
                className="next-btn"
                onClick={nextStep}
                disabled={!formData.name}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="form-step">
            <h4>Contact Details</h4>
            <div className="form-field">
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-actions">
              <button type="button" className="prev-btn" onClick={prevStep}>Back</button>
              <button 
                type="button" 
                className="next-btn" 
                onClick={nextStep}
                disabled={!formData.phone}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h4>Email Address</h4>
            <div className="form-field">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-actions">
              <button type="button" className="prev-btn" onClick={prevStep}>Back</button>
              <button 
                type="button" 
                className="next-btn" 
                onClick={nextStep}
                disabled={!formData.email || !formData.email.includes('@')}
              >
                Review
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h4>Confirm Details</h4>
            <div className="review-details">
              <div className="review-item">
                <span className="review-label">Name:</span>
                <span className="review-value">{formData.name}</span>
              </div>
              <div className="review-item">
                <span className="review-label">phone:</span>
                <span className="review-value">{formData.phone}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Email:</span>
                <span className="review-value">{formData.email}</span>
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="prev-btn" onClick={prevStep}>Edit</button>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id={id} className="channel-partner">
      <div className="channel-partner-container">
        <div className="channel-partner-image">
          <img src={partner} alt="Become a Channel Partner" />
        </div>
        <div className="channel-partner-content">
          <h2>Become a Channel Partner</h2>
          <p>Unlock new opportunities with <strong>AGF Group</strong>! Partner with us and grow your career in the real estate industry.</p>
          <ul>
            <li>Access to Premium Property Listings</li>
            <li>Attractive Commissions & Incentives</li>
            <li>End-to-End Sales Support</li>
            <li>Marketing Assistance</li>
            <li>Transparent and Long-Term Partnership</li>
          </ul>
          <button className="channel-partner-btn" onClick={() => setShowForm(true)}>Become a Partner</button>
        </div>
      </div>

      {/* Classy Popup Form */}
      {showForm && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-form" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>Become a Channel Partner</h3>
              <button className="close-btn" onClick={closePopup}>×</button>
            </div>
            
            {submitSuccess ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h4>Thank You!</h4>
                <p>Your application has been submitted successfully. Our team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <div className="form-progress">
                  {[0, 1, 2, 3].map((step) => (
                    <div 
                      key={step} 
                      className={`progress-step ${formStep >= step ? 'active' : ''} ${formStep === step ? 'current' : ''}`}
                    />
                  ))}
                </div>
                <form onSubmit={handleSubmit}>
                  {renderFormStep()}
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ChannelPartner;
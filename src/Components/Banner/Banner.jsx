import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Banner.css';

const Banner = ({ id }) => {
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const closeForm = () => {
    setShowForm(false);
    setFormStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs.sendForm(
      'service_k9ab8bk',
      'template_63kra9e',
      formRef.current,
      '-UzTIlfx2uPhW3BV0'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setFormStatus('success');
      setTimeout(() => {
        setShowForm(false);
        setFormStatus('');
        setFormData({ name: '', email: '', phone: '' });
      }, 3000);
    })
    .catch((error) => {
      console.error('Failed to send email:', error.text);
      setFormStatus('error');
    });
  };

  return (
    <section id={id} className="hero-section">
      <div className="hero-overlay">
        <h1>AGF Group - Building a Better Tomorrow</h1>
        <h2>Your Gateway to Premier Real Estate Investments</h2>
        <p>For over 15 years, we've been dedicated to creating exceptional living experiences that blend comfort, style, and functionality.</p>
        <button 
          className="cta-button" 
          onClick={() => setShowForm(true)}
        >
          Contact Us Today
        </button>
      </div>

      {/* Contact Form Popup */}
      {showForm && (
        <div className="form-popup-overlay" onClick={closeForm}>
          <div className="form-popup" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button"
              className="close-button" 
              onClick={closeForm}
              aria-label="Close"
            >
              &times;
            </button>
            <h2>Contact Us</h2>
            <p>Fill out the form below and we'll get back to you shortly.</p>
            
            {formStatus === 'success' ? (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Mobile Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Submit'}
                </button>
                
                {formStatus === 'error' && (
                  <div className="error-message">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
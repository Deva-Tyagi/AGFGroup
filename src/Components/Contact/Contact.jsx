import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = ({ id }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false, 
    phone: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'investment') {
      setFocused(prev => ({
        ...prev,
        [name]: true
      }));
    }
  };

  const handleFocus = (field) => {
    setFocused(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const serviceId = 'service_k9ab8bk';
    const templateId = 'template_63kra9e';
    const publicKey = '-UzTIlfx2uPhW3BV0';
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setSubmitStatus('success');

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setFocused({
          name: false,
          email: false,
          phone: false,
          message: false,
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id={id} className="contact-section">
      <div className="contact-overlay"></div> 
      <div className="contact-container">
        <div className="contact-header">
          <h2>Ready to Invest?</h2>
          <div className="header-accent">
            <span className="accent-line"></span>
          </div>
          <p className="contact-description">
            AGF Group's Granted Profit Plan offers investors a unique opportunity to earn high returns 
            backed by tangible real estate assets. We invite you to become a part of AGF Group's 
            expanding journey.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form-container">
            <h3>Contact Us</h3>
            {submitStatus === 'success' && (
                <div className="submission-message success">
                Your message has been sent successfully. We'll get back to you soon!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="submission-message error">
                There was an error sending your message. Please try again later.
              </div>
            )}
            <form ref={form} onSubmit={handleSubmit}>
              <div className={`form-field ${focused.name ? 'focused' : ''}`}>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')} 
                  onBlur={() => handleBlur('name')}
                  required 
                />
                <label htmlFor="name">Your Name</label>
                <div className="field-highlight"></div>
              </div>
              
              <div className={`form-field ${focused.email ? 'focused' : ''}`}>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')} 
                  onBlur={() => handleBlur('email')}
                  required 
                />
                <label htmlFor="email">Your Email</label>
                <div className="field-highlight"></div>
              </div>
              
              <div className={`form-field ${focused.phone ? 'focused' : ''}`}>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')} 
                  onBlur={() => handleBlur('phone')}
                  required 
                />
                <label htmlFor="phone">Your Phone Number</label>
                <div className="field-highlight"></div>
              </div>
              
              
              <div className={`form-field textarea-field ${focused.message ? 'focused' : ''}`}>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')} 
                  onBlur={() => handleBlur('message')}
                  required
                ></textarea>
                <label htmlFor="message">Your Message</label>
                <div className="field-highlight"></div>
              </div>
              
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                {!isSubmitting && (
                  <svg className="button-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
          
          <div className="contact-info-container">
            <h3>Get in Touch</h3>
            <div className="info-divider"></div>
            
            <div className="info-item fadeIn">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9979 21.4142 21.3729C21.0391 21.748 20.5116 21.9587 19.9612 21.9587C19.9121 21.9587 19.8629 21.9574 19.814 21.9547C18.3068 21.8438 16.8346 21.4668 15.477 20.842C14.2089 20.2695 13.0701 19.4875 12.1034 18.5207C11.1367 17.554 10.3546 16.4152 9.78217 15.1471C9.15523 13.7861 8.77814 12.3102 8.669 10.799C8.66276 10.5958 8.68902 10.3925 8.74665 10.1988C8.80427 10.0051 8.89236 9.82497 9.00654 9.66789C9.12072 9.51082 9.25909 9.3797 9.41547 9.28031C9.57184 9.18092 9.7435 9.11477 9.923 9.085C10.0638 9.06168 10.2079 9.05 10.352 9.05H13.352C13.7085 9.04626 14.0525 9.17849 14.3184 9.42144C14.5843 9.66439 14.7518 9.99965 14.789 10.354C14.8486 10.9871 14.9641 11.6118 15.134 12.216C15.2293 12.5387 15.2278 12.8839 15.1299 13.2055C15.0319 13.5272 14.8418 13.8105 14.582 14.022L13.792 14.812C14.3194 16.0996 15.0989 17.2537 16.082 18.2032C17.0651 19.1527 18.2445 19.8937 19.552 20.377L20.353 19.576C20.5645 19.3162 20.8478 19.1261 21.1694 19.0281C21.4911 18.9302 21.8363 18.9287 22.159 19.024C22.7632 19.1939 23.3879 19.3094 24.021 19.369C24.3787 19.4067 24.7168 19.5766 24.9594 19.8463C25.2019 20.1161 25.3304 20.4648 25.32 20.823L25.32 19.921C25.32 20.4714 25.1093 20.9989 24.7342 21.374C24.3591 21.7491 23.8316 21.9597 23.2812 21.9597C23.2321 21.9597 23.1829 21.9584 23.134 21.9557C21.6268 21.8448 20.1546 21.4678 18.797 20.843C17.5289 20.2705 16.3901 19.4885 15.4234 18.5217C14.4567 17.555 13.6746 16.4162 13.1022 15.1481C12.4752 13.7871 12.0981 12.3112 11.989 10.8C11.9828 10.5968 12.009 10.3935 12.0667 10.1998C12.1243 10.0061 12.2124 9.82597 12.3265 9.66889C12.4407 9.51182 12.5791 9.3807 12.7355 9.28131C12.8918 9.18192 13.0635 9.11577 13.243 9.086C13.3838 9.06268 13.5279 9.051 13.672 9.051H16.672C17.0285 9.04726 17.3725 9.17949 17.6384 9.42244C17.9043 9.66539 18.0718 10.0006 18.109 10.355C18.1686 10.9881 18.2841 11.6128 18.454 12.217C18.5493 12.5397 18.5478 12.8849 18.4499 13.2065C18.3519 13.5282 18.1618 13.8115 17.902 14.023L17.112 14.813C17.6394 16.1006 18.4189 17.2547 19.402 18.2042C20.3851 19.1537 21.5645 19.8947 22.872 20.378L23.673 19.577C23.8845 19.3172 24.1678 19.1271 24.4894 19.0291C24.8111 18.9312 25.1563 18.9297 25.479 19.025C26.0832 19.1949 26.7079 19.3104 27.341 19.37C27.6987 19.4077 28.0368 19.5776 28.2794 19.8473C28.5219 20.1171 28.6504 20.4658 28.64 20.824V23.824C28.64 24.3744 28.4293 24.9019 28.0542 25.277C27.6791 25.6521 27.1516 25.8627 26.6012 25.8627C26.5521 25.8627 26.5029 25.8614 26.454 25.8587C24.9468 25.7478 23.4746 25.3708 22.117 24.746C20.8489 24.1735 19.7101 23.3915 18.7434 22.4247C17.7767 21.458 16.9946 20.3192 16.4222 19.051C15.7953 17.69 15.4182 16.2142 15.309 14.703" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>+91-9599727060, +91-7042156182</p>
              </div>
            </div>
            
            <div className="info-item fadeIn delay-1">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>agfgroupsofficial@gmail.com</p>
              </div>
            </div>
            
            {/* <div className="info-item fadeIn delay-2">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="info-text">
                <h4>Website</h4>
                <p>[Website URL]</p>
              </div>
            </div> */}
            
            <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61574187562137" className="social-link" aria-label="Facebook">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>
              <a href="https://x.com/AGF_Groups" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/agf_groups/" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
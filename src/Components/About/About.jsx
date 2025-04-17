import React from 'react';
import './About.css';
import aboutImg from '../Images/aboutus1.jpeg'

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <div className="container">
        <h2>About AGF Group</h2>
        <div className="about-content">
          <div className="about-text">
            <p>AGF Group is a trusted and time-tested name in the Indian real estate landscape, backed by a legacy of 15+ years. We have consistently delivered excellence across a diverse portfolio of projects—ranging from scenic holiday retreats in the hills to high-potential urban developments in thriving cityscapes.
<br />
<br />
            Our expertise lies in crafting both residential and investment spaces that perfectly blend luxury, legal transparency, and strategic location. Every project we undertake reflects our commitment to quality, thoughtful design, and long-term value.
<br />
<br />
            With a strong presence in Noida, Uttarakhand, Himachal Pradesh, Goa, and Punjab, AGF Group continues to shape vibrant communities and create opportunities for secure, future-ready investments. We don’t just build properties—we create experiences that elevate lifestyles and grow legacies.</p>
          </div>
          <div className="about-image">
            <img src={aboutImg} />
          </div>
        </div>
        <div className="timeline">
        </div>
      </div>
    </section>
  );
};

export default About;
// UnderPlanning.jsx - Updated with animation
import React from 'react';
import { Check } from 'lucide-react';
import './UnderPlanning.css';

const UnderPlanning = ({id}) => {
  const projects = [
    {
      id: 1,
      name: "AVENUE INVESTMENT FLOORS",
      location: "Mashobra, Himachal Pradesh",
      productMix: "Plots & Villas",
      status: "Under Planning",
      description: "Premium plots and luxury villas nestled in Mashobra's Pine and Deodar forests, offering panoramic valley views and serene mountain living in Shimla district.",
      city:"Mashobra"
    },
    {
      id: 2,
      name: "HIMACHAL MOOD MENTION",
      location: "Solan, Himachal Pradesh",
      productMix: "Plots & Villas",
      status: "Under Planning",
      description: "Tranquil plots and farm villas in Solan providing urbanites an escape to pollution-free surroundings with the therapeutic climate of Himachal Pradesh.",
      city: "Solan"
    },
    {
      id: 3,
      name: "SHREE RADHE GARDEN",
      location: "Solra, Haryana",
      productMix: "Plots & Villas",
      status: "Under Planning",
      description: "Modern plots and elegant villas in Solra, Haryana combining contemporary design with thoughtful amenities in an emerging location with excellent connectivity.",
      city: "Solra"
    },
    {
      id: 4,
      name: "MOOD MENTION",
      location: "Goa",
      productMix: "Plots & Villas",
      status: "Under Planning",
      description: "Exclusive gated community in Goa featuring premium plots and villas that capture the essence of tropical paradise with world-class amenities and security.",
      city: "Goa"
    }
  ];

  return (
    <div className="under-planning-container" id={id}>
      <div className="under-planning-wrapper">
        <div className="section-header">
          <h2 className="section-title">UPCOMING PROJECTS</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-content">
                <div className="project-header">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-location">{project.city}</p>
                  <p className="project-description">{project.description}</p>
                </div>
                
                <div className="project-details">
                  <div className="detail-item">
                    <div className="icon-container">
                      <Check size={20} color="#ffffff" />
                    </div>
                    <div className="detail-content">
                      <h4 className="detail-label">LOCATION</h4>
                      <p className="detail-text">{project.location}</p>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    {/* <div className="icon-container">
                      <Check size={20} color="#ffffff" />
                    </div>
                    <div className="detail-content">
                      <h4 className="detail-label">SIZE</h4>
                      <p className="detail-text">{project.size}</p>
                    </div> */}
                  </div>
                  
                  <div className="detail-item">
                    <div className="icon-container">
                      <Check size={20} color="#ffffff" />
                    </div>
                    <div className="detail-content">
                      <h4 className="detail-label">PRODUCT MIX</h4>
                      <p className="detail-text">{project.productMix}</p>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="icon-container">
                      <Check size={20} color="#ffffff" />
                    </div>
                    <div className="detail-content">
                      <h4 className="detail-label">STATUS</h4>
                      <p className="detail-text">{project.status}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-indicator"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnderPlanning;
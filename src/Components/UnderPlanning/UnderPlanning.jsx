// UnderPlanning.jsx - Updated with animation
import React from 'react';
import { Check } from 'lucide-react';
import './UnderPlanning.css';

const UnderPlanning = ({id}) => {
  const projects = [
    {
      id: 1,
      name: "HEINRICH ESTATE",
      location: "Mashobra, Himachal Pradesh",
      size: "20 Acres",
      productMix: "Luxury Cottages, 1 BHK Suites & 2 BHK Apartments",
      status: "Under Planning",
      description: "An upcoming residential development nestled in the lush Pine and Deodar forests of Shimla district, Mashobra Hills is located in the middle of a pristine valley featuring unmatched views with a spectacular living environment.",
      city: "Mashobra"
    },
    {
      id: 2,
      name: "GREEN FARM HOUSES",
      location: "Chandigarh",
      size: "30 Acres",
      productMix: "Luxury Farm House Plots of One Acre & Plus",
      status: "Under Planning",
      description: "Green Farm Houses will offer urbanites the opportunity to live in the sprawling home of their dreams in the midst of a pollution free environment.",
      city: "New Chandigarh"
    },
    {
      id: 3,
      name: "CROSSWALK",
      location: "Mohali, Punjab",
      size: "15 Acres",
      productMix: "Commercial Spaces & Luxury Apartments",
      status: "Under Planning",
      description: "A modern mixed-use development with premium commercial spaces and residential units in the heart of Mohali.",
      city: "Mohali, Punjab"
    },
    {
      id: 4,
      name: "HAMILTON COURT",
      location: "Mohali, Punjab",
      size: "25 Acres",
      productMix: "Premium Villas & Townhouses",
      status: "Under Planning",
      description: "An exclusive gated community featuring premium villas and townhouses with world-class amenities.",
      city: "Mohali, Punjab"
    }
  ];

  return (
    <div className="under-planning-container" id={id}>
      <div className="under-planning-wrapper">
        <div className="section-header">
          <h2 className="section-title">UNDER PLANNING</h2>
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
                    <div className="icon-container">
                      <Check size={20} color="#ffffff" />
                    </div>
                    <div className="detail-content">
                      <h4 className="detail-label">SIZE</h4>
                      <p className="detail-text">{project.size}</p>
                    </div>
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
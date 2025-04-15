import React, { useState } from 'react';
import './Projects.css';

const Projects = ({ id }) => {
  // Sample real estate properties data
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Waterfront Villa",
      location: "Miami Beach, FL",
      description: "5 bed, 4 bath modern villa with panoramic ocean views",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIg67ppTVP1Zt6tIikFl-as56RhrWoDx_nMg&s",
      price: "$1,250,000",
      // Additional details for popup
      size: "4,200 sq ft",
      yearBuilt: "2018",
      amenities: ["Private Pool", "Home Theater", "Smart Home System", "Yacht Dock", "Wine Cellar"],
      agent: "Sarah Johnson",
      agentPhone: "(305) 555-7890",
      features: "Floor-to-ceiling windows, Italian marble flooring, custom chef's kitchen with top-of-the-line appliances, spa-like master bathroom, and a private elevator.",
      propertyType: "Single Family Home",
      parkingSpaces: "3-car garage"
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Chicago, IL",
      description: "3 bed, 2 bath penthouse with rooftop terrace",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOlda9eae1X-mAXSwTNnTi9YrCYfbxSJ4_w&s",
      price: "$895,000",
      // Additional details for popup
      size: "2,800 sq ft",
      yearBuilt: "2020",
      amenities: ["Rooftop Terrace", "Fitness Center", "24/7 Concierge", "Pet Spa", "Wine Storage"],
      agent: "Michael Chen",
      agentPhone: "(312) 555-4321",
      features: "Floor-to-ceiling windows with panoramic city views, hardwood floors, gourmet kitchen with waterfall island, smart home technology, and custom built-ins.",
      propertyType: "Condominium",
      parkingSpaces: "2 dedicated spaces"
    },
    {
      id: 3,
      title: "Suburban Family Home",
      location: "Austin, TX",
      description: "4 bed, 3 bath newly renovated home with large backyard",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4d1CcwWsUnuRC0ulccJY3QzoZWkoi8ADHiA&s",
      price: "$675,000",
      // Additional details for popup
      size: "3,100 sq ft",
      yearBuilt: "2015 (Renovated 2023)",
      amenities: ["Covered Patio", "Fire Pit", "Home Office", "Smart Sprinkler System", "Security System"],
      agent: "David Martinez",
      agentPhone: "(512) 555-6789",
      features: "Open floor plan, chef's kitchen with quartz countertops, luxury vinyl plank flooring, updated bathrooms, and energy-efficient windows and HVAC system.",
      propertyType: "Single Family Home",
      parkingSpaces: "2-car garage"
    },
    {
      id: 4,
      title: "Mountain Retreat",
      location: "Aspen, CO",
      description: "3 bed, 2 bath cabin with stunning mountain views",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUSeTPvFiCdg4y7SEqYTdVuCbzcOVB1DmDQ&s",
      price: "$525,000",
      // Additional details for popup
      size: "1,950 sq ft",
      yearBuilt: "2010",
      amenities: ["Wood-burning Fireplace", "Hot Tub", "Outdoor Kitchen", "Hiking Trails Access", "Ski Storage"],
      agent: "Emily Wilson",
      agentPhone: "(970) 555-2468",
      features: "Exposed beam ceilings, floor-to-ceiling stone fireplace, wraparound deck with mountain views, hardwood floors, and a gourmet kitchen with granite countertops.",
      propertyType: "Cabin",
      parkingSpaces: "2-car carport"
    }
  ]);
  
  // State for modal popup
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  // Open modal function
  const openPropertyModal = (property) => {
    setSelectedProperty(property);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  // Close modal function
  const closePropertyModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
  };

  return (
    <section id={id} className="properties-section">
      <div className="container">
        <div className="section-header">
          <h2>NEW LAUNCHES</h2>
          <div className="elegant-underline"></div>
        </div>
        
        <div className="properties-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card" onClick={() => openPropertyModal(property)}>
              <div className="property-image-container">
                <img src={property.image} alt={property.title} className="property-image" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{property.title}</h3>
                    <p className="subtitle">{property.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="property-details">
                <h3 className="property-title">{property.title}</h3>
                <div className="property-info">
                  <div className="info-group">
                    <h4>LOCATION</h4>
                    <p>{property.location}</p>
                  </div>
                  
                  <div className="info-group">
                    <h4>SIZE</h4>
                    <p>{property.size}</p>
                  </div>
                  
                  <div className="info-group">
                    <h4>PROPERTY TYPE</h4>
                    <p>{property.propertyType}</p>
                  </div>
                  
                  <div className="info-group">
                    <h4>STATUS</h4>
                    <p>AVAILABLE</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Property Details Modal */}
      {modalOpen && selectedProperty && (
        <div className="property-modal-overlay" onClick={closePropertyModal}>
          <div className="property-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closePropertyModal} aria-label="Close modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="modal-content">
              <div className="modal-image-container">
                <img src={selectedProperty.image} alt={selectedProperty.title} className="modal-property-image" />
                <div className="modal-price-tag">{selectedProperty.price}</div>
              </div>
              
              <div className="modal-property-details">
                <div className="modal-header">
                  <h2 className="modal-property-title">{selectedProperty.title}</h2>
                  <div className="modal-property-location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{selectedProperty.location}</span>
                  </div>
                </div>
                
                <div className="modal-property-overview">
                  <div className="overview-item">
                    <h4>Property Type</h4>
                    <p>{selectedProperty.propertyType}</p>
                  </div>
                  <div className="overview-item">
                    <h4>Size</h4>
                    <p>{selectedProperty.size}</p>
                  </div>
                  <div className="overview-item">
                    <h4>Year Built</h4>
                    <p>{selectedProperty.yearBuilt}</p>
                  </div>
                  <div className="overview-item">
                    <h4>Parking</h4>
                    <p>{selectedProperty.parkingSpaces}</p>
                  </div>
                </div>
                
                <div className="modal-description">
                  <h3>Description</h3>
                  <p>{selectedProperty.description}</p>
                  <p>{selectedProperty.features}</p>
                </div>
                
                <div className="modal-amenities">
                  <h3>Amenities</h3>
                  <ul className="amenities-list">
                    {selectedProperty.amenities.map((amenity, index) => (
                      <li key={index} className="amenity-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-agent-info">
                  <h3>Contact Agent</h3>
                  <p className="agent-name">{selectedProperty.agent}</p>
                  <p className="agent-phone">{selectedProperty.agentPhone}</p>
                  <button className="contact-agent-button">Contact Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
import React, { useState } from 'react';
import './Projects.css';
import majestic from '../Images/amodasari.jpg'
import smr from '../Images/smrgreenwood.jpg'
import empire from '../Images/empire.jpg'
import emerald from '../Images/emerlad.jpg'
import amodasari from '../Images/amodasarii.jpeg'

const Projects = ({ id }) => {
 
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Majestic Villas & Farms",
      location: "Solra, Haryana; ",
      description: "30-acre estate of freehold luxury plots; Ideal for weekend homes or ROI-focused investments, 3KM Jewar Airport, Direct connect with Yamuna Expressway & Delhi Bombay Expressway ",
      image: majestic,
      price: "Immediate registry  available",
      // Additional details for popup
      size: "1008 sq. yards",
      yearBuilt: "2018",
      amenities: ["Park, Wide Roads, Children Play Zone, Nearby Proposed Hospital, Entertainment Hub"],
      propertyType: "Villa Plots ",
    },
    {
      id: 2,
      title: "SMR GREENWOOD",
      location: "Solra, Haryana; ",
      description: "25-acre estate of luxury plots in gated community; Ideal for weekend homes or ROI-focused investments, 3KM Jewar Airport, Direct connect with Yamuna Expressway & Delhi Bombay Expressway ",
      image: smr,
      price: "Immediate registry available",
      // Additional details for popup
      size: "100 and 200 sq. yard plots",
      yearBuilt: "2019",
      amenities: ["Park, 40ft Wide Roads, Children Play Zone, Nearby Proposed Hospital, Entertainment Hub"],
      propertyType: "Villa Plots ",

    },
    {
      id: 3,
      title: "Royal Empire",
      location: "Solra, Haryana; ",
      description: "3-acre estate of luxury plots in gated community; The township is designed for safety, boasting CCTV surveillance and a guarded entrance. Residents will benefit from wide internal roads of 25 ft. and a 30 ft. main project road, facilitating easy access throughout the community. With government electricity provided, Royal Empire offers a perfect blend of modern living and prime location, making it an ideal investment opportunity in a rapidly growing area.",
      image: empire,
      price: "Immediate registry available",
      // Additional details for popup
      size: " 111 sq. yards onwards",
      yearBuilt: "2021",
      amenities: ["Park, Children Play Zone, Nearby Proposed Hospital, Entertainment Hub"],
      propertyType: "Villa Plots ",

    },
    {
      id: 4,
      title: "Emerald Estate",
      location: "Solra, Haryana; ",
      description: "Each plot will come with a boundary wall and security gate for added privacy and security. The project boasts a 30 ft. wide main road and 25 ft. wide external roads, ensuring smooth connectivity throughout the enclave. Additionally, residents will benefit from government electricity, further enhancing the convenience and quality of living in this prime location near the airport.",
      image: emerald,
      price: "Immediate registry available",
      // Additional details for popup
      size: " sizes starting from 1210 sq. yards,",
      yearBuilt: "2021",
      amenities: ["Park, Children Play Zone, Nearby Proposed Hospital, Entertainment Hub"],
      propertyType: "Villa Plots ",
    },
    // {
    //   id: 5,
    //   title: "Amoda Sari",
    //   location: "Petshal, Near Almora; Uttarakhand ",
    //   description: " AGF proudly presents Amoda Sari, an exclusive villa township located in Petshal, near Almora, Uttarakhand. This exquisite project is designed for those seeking a peaceful retreat amidst nature without compromising on modern comforts. Nestled in the lap of the majestic Himalayas, Amoda Sari offers breathtaking panoramic views, fresh mountain air, and a tranquil environment. Its prime location ensures seamless connectivity to Mukteshwar, Bhimtal, Nainital, and Almora, making it an ideal investment for a holiday home, retirement retreat, or a high-return real estate opportunity. Almora Enclave is an exclusive project located just offering immediate registry, mutation, and possession. Designed for those seeking luxurious and spacious living, the project features legal freehold land with farm sizes starting from 1210 sq. yards, making it perfect for building your dream farmhouse. Each plot comes with a boundary wall and security gate, ensuring privacy and safety for residents.",
    //   image: amodasari,
    //   price: "Immediate registry available",
    //   // Additional details for popup
    //   size: " sizes starting from 1210 sq. yards,",
    //   yearBuilt: "2024",
    //   amenities: ["Park, Children Play Zone, Nearby Proposed Hospital, Entertainment Hub"],
    //   propertyType: "Villa Plots ",

    // }
  ]);
  
  // State for modal popup
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  // Open modal function
  const openPropertyModal = (property) => {
    setSelectedProperty(property);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };
  
  // Close modal function
  const closePropertyModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; 
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
                
                {/* <div className="modal-agent-info">
                  <h3>Contact Agent</h3>
                  <p className="agent-name">{selectedProperty.agent}</p>
                  <p className="agent-phone">{selectedProperty.agentPhone}</p>
   
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
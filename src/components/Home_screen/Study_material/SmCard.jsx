import React from 'react'
import './SmCard.css'

function SmCard() {
  return (
    <div className="card-container">
      <div className="image-card">
        <div className="image-wrapper">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Study Material" 
            className="card-image"
          />
          <div className="image-overlay">
            <h3 className="card-title">Title Here</h3>
            <p className="card-description">Description of the material</p>
            <button className="card-button">View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmCard 
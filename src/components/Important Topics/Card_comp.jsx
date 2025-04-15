// SmCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Card_comp.css'; // Import your CSS file for styling


function Card_comp({ title, description, imageUrl, downloadUrl, fileType }) {
    return (
        <div to={downloadUrl} className="sm-card">
            <div className="sm-card-image">
                <h1>{imageUrl}</h1>
            </div>
            <div id="navbare-line"></div>
            <div className="sm-card-content">
                <h2 className="sm-card-title">{title}</h2>
                <p className="sm-card-description">{description}</p>
                <a href={downloadUrl} className="sm-card-download-btn">
                    Download Now
                </a>
            </div>
        </div>
    );
}

export default Card_comp;
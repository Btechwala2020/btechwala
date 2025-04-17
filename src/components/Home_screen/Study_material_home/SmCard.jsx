// SmCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Sm_card.css'; // Import your CSS file for styling


function SmCard({ title, description, imageUrl, downloadUrl, fileType }) {
    return (
        <div to={downloadUrl} className="sm-cardee">
            <div className="sm-card-imageee">
                <h1>{imageUrl}</h1>
            </div>
            <div id="navbare-lineee"></div>
            <div className="sm-card-contentee">
                <h2 className="sm-card-titleee">{title}</h2>
                <p className="sm-card-descriptionee">{description}</p>
                <a href={downloadUrl} className="sm-card-download-btnee">
                    Visit Now
                </a>
            </div>
        </div>
    );
}

export default SmCard;
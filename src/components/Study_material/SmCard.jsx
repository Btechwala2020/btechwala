import React from 'react';
import { Link } from 'react-router-dom';
import './Sm_card.css';

function SmCard({ title, description, imageUrl, downloadUrl, fileType }) {
    return (
        <div className="sm-carde">
            <div className="sm-card-imagee">
                <h1>{imageUrl}</h1>
            </div>
            <div id="navbare-linee"></div>
            <div className="sm-card-contente">
                <h2 className="sm-card-titlee">{title}</h2>
                <p className="sm-card-descriptione">{description}</p>
                <Link to={downloadUrl} className="sm-card-download-btne">
                    Visit Now
                </Link>
            </div>
        </div>
    );
}

export default SmCard;
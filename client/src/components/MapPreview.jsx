import React from 'react';
import './styles/MapPreview.css';

const MapPreview = ({ location, onClose }) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${location}`;

  return (
    <div className="map-preview">
      <iframe
        title="Map Preview"
        className="map-frame"
        src={mapSrc}
        allowFullScreen
      ></iframe>
      <button className="close-btn" onClick={onClose}>Close</button>
    </div>
  );
};

export default MapPreview;
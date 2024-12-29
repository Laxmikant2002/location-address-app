import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/Modal.css';

const LocationPermissionModal = ({ setLocation }) => {
    const navigate = useNavigate();

    const handleEnableLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setLocation(userLocation);
                    alert("Location Enabled!");
                },
                () => {
                    alert("Unable to access location. Please try manually.");
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    const handleSearchManually = () => {
        navigate("/select-location");
    };

    return (
        <div className="modal">
            <h2>Location Permission is Off</h2>
            <p>
                We need your location to find the nearest store & provide you a seamless
                delivery experience.
            </p>
            <button onClick={handleEnableLocation}>Enable Location</button>
            <button onClick={handleSearchManually}>Search Your Location Manually</button>
        </div>
    );
};

export default LocationPermissionModal;

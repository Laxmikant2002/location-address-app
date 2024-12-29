import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import './styles/ManualLocationSelector.css';

const mapContainerStyle = {
    height: '400px',
    width: '100%',
};

const ManualLocationSelector = ({ setLocation }) => {
    const [location, setLocationState] = useState({ lat: -34.397, lng: 150.644 });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocationState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("Location permission denied. Please enable location services.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("Location unavailable. Please try again.");
                        break;
                    case error.TIMEOUT:
                        alert("Location request timed out. Try again.");
                        break;
                    default:
                        alert("An unknown error occurred.");
                }
            }
        );
    }, []);

    const handleMarkerDragEnd = async (event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        };
        setLocationState(newLocation);
        setLocation(newLocation);

        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newLocation.lat},${newLocation.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
            );
            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Network error occurred. Please try again later.");
        }
    };

    return (
        <div className="manual-location-selector">
            <h2>Select Your Location</h2>
            <div className="map-container">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={15}
                    center={location}
                >
                    <Marker
                        position={location}
                        draggable={true}
                        onDragEnd={handleMarkerDragEnd}
                    />
                </GoogleMap>
            </div>
        </div>
    );
};

export default ManualLocationSelector;
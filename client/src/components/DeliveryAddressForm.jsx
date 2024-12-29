import React, { useState } from 'react';
import { validateAddress } from '../mockApi'; // Import mock API

const DeliveryAddressForm = ({ setSavedAddresses, savedAddresses }) => {
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [houseDetails, setHouseDetails] = useState("");
    const [apartmentDetails, setApartmentDetails] = useState("");

    const saveAddress = async (address) => {
        const response = await validateAddress(address.location);
        if (response.status === "OK") {
            setSavedAddresses([...savedAddresses, address]);
        } else {
            alert("Invalid address. Please try again.");
        }
    };

    const handleSave = async () => {
        const address = {
            category,
            location,
            houseDetails,
            apartmentDetails,
        };
        await saveAddress(address);
    };

    return (
        <div className="delivery-address-form">
            <form>
                <div className="form-group">
                    <label>Category</label>
                    <div className="category-buttons">
                        <button
                            type="button"
                            className={category === "Home" ? "selected" : ""}
                            onClick={() => setCategory("Home")}
                        >
                            🏠 Home
                        </button>
                        <button
                            type="button"
                            className={category === "Work" ? "selected" : ""}
                            onClick={() => setCategory("Work")}
                        >
                            💼 Work
                        </button>
                        <button
                            type="button"
                            className={category === "Friends & Family" ? "selected" : ""}
                            onClick={() => setCategory("Friends & Family")}
                        >
                            👨‍👩‍👧‍👦 Friends & Family
                        </button>
                    </div>
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter your location"
                    />
                </div>

                <div className="form-group">
                    <label>House Details</label>
                    <input
                        type="text"
                        value={houseDetails}
                        onChange={(e) => setHouseDetails(e.target.value)}
                        placeholder="Enter house details"
                    />
                </div>

                <div className="form-group">
                    <label>Apartment Details</label>
                    <input
                        type="text"
                        value={apartmentDetails}
                        onChange={(e) => setApartmentDetails(e.target.value)}
                        placeholder="Enter apartment details"
                    />
                </div>

                <button type="button" onClick={handleSave} className="save-button">
                    Save Address
                </button>
            </form>
        </div>
    );
};

export default DeliveryAddressForm;
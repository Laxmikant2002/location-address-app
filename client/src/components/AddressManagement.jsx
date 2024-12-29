import React, { useState } from 'react';
import AddressCard from './AddressCard';
import './styles/AddressManagement.css';

const AddressManagement = ({ savedAddresses, updateAddress, deleteAddress, selectAddress, toggleFavorite }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredAddresses = savedAddresses.filter((address) =>
        address.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        address.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="address-management">
            <h2>Manage Your Addresses</h2>
            <input
                type="text"
                placeholder="Search addresses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
            />

            <div className="address-list">
                {filteredAddresses.length > 0 ? (
                    filteredAddresses.map((address, index) => (
                        <AddressCard
                            key={index}
                            title={address.category}
                            address={`${address.location}, ${address.houseDetails}, ${address.apartmentDetails}`}
                            onEdit={() => updateAddress(index)}
                            onDelete={() => deleteAddress(index)}
                            onSelect={() => selectAddress(address)}
                        />
                    ))
                ) : (
                    <p>No addresses found. Try searching or add a new one.</p>
                )}
            </div>
        </div>
    );
};

export default AddressManagement;
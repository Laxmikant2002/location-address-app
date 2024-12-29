import React, { useState } from 'react';
import AddressManagement from '../components/AddressManagement';
import './styles/Addresses.css';

const Addresses = () => {
  const [savedAddresses, setSavedAddresses] = useState([]);

  const updateAddress = (index) => {
    const updatedAddresses = [...savedAddresses];
    const newDetails = prompt("Update Address Details (e.g., House/Road/Area):", updatedAddresses[index].location);
    if (newDetails) {
      updatedAddresses[index].location = newDetails;
      setSavedAddresses(updatedAddresses);
    }
  };

  const deleteAddress = (index) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      const updatedAddresses = savedAddresses.filter((_, i) => i !== index);
      setSavedAddresses(updatedAddresses);
    }
  };

  const selectAddress = (address) => {
    alert(`Selected Address: ${address.location}`);
  };

  return (
    <div className="addresses">
      <h1>Manage Your Addresses</h1>
      <AddressManagement
        savedAddresses={savedAddresses}
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
        selectAddress={selectAddress}
      />
    </div>
  );
};

export default Addresses;
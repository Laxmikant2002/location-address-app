import React from 'react';
import './styles/AddressCard.css';

const AddressCard = ({ title, address, onEdit, onDelete, onSelect }) => {
  return (
    <div className="address-card">
      <div className="address-title">{title}</div>
      <div className="address-details">{address}</div>
      <div className="address-actions">
        <button className="edit-btn" onClick={onEdit}>Edit</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
        <button className="select-btn" onClick={onSelect}>Select</button>
      </div>
    </div>
  );
};

export default AddressCard;
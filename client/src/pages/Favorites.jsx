import React, { useState } from 'react';
import AddressCard from '../components/AddressCard';
import './styles/Favorites.css';

const Favorites = () => {
  const [favoriteAddresses, setFavoriteAddresses] = useState([]);

  const removeFavorite = (index) => {
    const updatedFavorites = favoriteAddresses.filter((_, i) => i !== index);
    setFavoriteAddresses(updatedFavorites);
  };

  return (
    <div className="favorites">
      <h1>Your Favorite Addresses</h1>
      <div className="address-list">
        {favoriteAddresses.length > 0 ? (
          favoriteAddresses.map((address, index) => (
            <AddressCard
              key={index}
              title={address.category}
              address={`${address.houseDetails}, ${address.apartmentDetails}, ${address.location}`}
              onDelete={() => removeFavorite(index)}
            />
          ))
        ) : (
          <p>No favorite addresses found.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ManualLocationSelector from './components/ManualLocationSelector';
import DeliveryAddressForm from './components/DeliveryAddressForm';
import AddressManagement from './components/AddressManagement';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Addresses from './pages/Addresses';
import Favorites from './pages/Favorites';

function App() {
    const [savedAddresses, setSavedAddresses] = useState([]);

    const saveAddress = (address) => {
        setSavedAddresses([...savedAddresses, address]);
    };

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
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/addresses" component={Addresses} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/select-location" component={ManualLocationSelector} />
                <Route path="/delivery-address" render={() => <DeliveryAddressForm saveAddress={saveAddress} />} />
                <Route
                    path="/address-management"
                    render={() => (
                        <AddressManagement
                            savedAddresses={savedAddresses}
                            updateAddress={updateAddress}
                            deleteAddress={deleteAddress}
                            selectAddress={selectAddress}
                        />
                    )}
                />
            </Switch>
        </Router>
    );
}

export default App;
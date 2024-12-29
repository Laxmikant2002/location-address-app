import React, { createContext, useReducer } from 'react';

const initialState = { locations: [] };

const LocationContext = createContext(initialState);

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOCATIONS':
            return { ...state, locations: action.payload };
        default:
            return state;
    }
};

export const LocationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(locationReducer, initialState);

    return (
        <LocationContext.Provider value={{ state, dispatch }}>
            {children}
        </LocationContext.Provider>
    );
};

export default LocationContext;
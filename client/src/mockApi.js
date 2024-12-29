export const mockGeocodeResponse = {
    status: "OK",
    results: [
        {
            formatted_address: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
            geometry: {
                location: {
                    lat: 37.4224764,
                    lng: -122.0842499,
                },
            },
        },
    ],
};

export const validateAddress = async (address) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockGeocodeResponse;
};
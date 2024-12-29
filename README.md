# Location Address App

This project is a Location/Address flow application that allows users to select and save their delivery location using Google Maps API. The frontend is built with React, and the backend is built with Node.js and Express.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (running instance or MongoDB Atlas)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/location-address-app.git
   cd location-address-app
   ```
2. Install server dependencies:
   ```npm install
   ```
3. Install client dependencies:
   ```cd client
      npm install
      cd ..
   ```
## Configuration
Create a .env file in the root directory and add your MongoDB URI and Google Maps API key:

   ```MONGO_URI=your_mongodb_uri
      REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```
## Running the Application

1. Start the server:
   ```npm run dev
   ```
2. The application should now be running on:
   Client: http://localhost:3000
   Server: http://localhost:5000
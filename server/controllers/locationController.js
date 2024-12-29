const Location = require('../models/Location');

class LocationController {
    async saveLocation(req, res) {
        try {
            const { address, coordinates } = req.body;
            const newLocation = new Location({ address, coordinates });
            await newLocation.save();
            res.status(201).json({ message: 'Location saved successfully', location: newLocation });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getLocations(req, res) {
        try {
            const locations = await Location.find();
            res.status(200).json(locations);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateLocation(req, res) {
        try {
            const { id } = req.params;
            const { address, coordinates } = req.body;
            const updatedLocation = await Location.findByIdAndUpdate(id, { address, coordinates }, { new: true });
            if (!updatedLocation) {
                return res.status(404).json({ message: 'Location not found' });
            }
            res.status(200).json({ message: 'Location updated successfully', location: updatedLocation });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteLocation(req, res) {
        try {
            const { id } = req.params;
            const deletedLocation = await Location.findByIdAndDelete(id);
            if (!deletedLocation) {
                return res.status(404).json({ message: 'Location not found' });
            }
            res.status(200).json({ message: 'Location deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new LocationController();
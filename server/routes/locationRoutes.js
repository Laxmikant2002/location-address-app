const express = require('express');
const router = express.Router();
const LocationController = require('../controllers/locationController');

router.post('/', LocationController.saveLocation);
router.get('/', LocationController.getLocations);
router.put('/:id', LocationController.updateLocation);
router.delete('/:id', LocationController.deleteLocation);

module.exports = router;
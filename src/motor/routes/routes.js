const express = require("express");
const router = express.Router();
const vehicleController = require('../controllers/vehicle.controller');

router.get('/', async (req,res) => {
    res.send('Hello Motorway!')
});

router.get('/vehicles/:vehicleId', vehicleController.getVehicles);


module.exports = router;
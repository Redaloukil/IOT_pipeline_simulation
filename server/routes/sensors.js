const express = require('express');

const sensorsController = require('../controllers/sensors');
const sensorsRoutes = express.Router();

sensorsRoutes
  .route('/sensors')
  .post(sensorsController.createSensor)
  .get(sensorsController.getSensors);


module.exports = sensorsRoutes;
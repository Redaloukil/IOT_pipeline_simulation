const express = require('express');

const sensorsController = require('../controllers/sensors');
const { isAuthenticated } = require('../middlewares/user-access');
const sensorsRoutes = express.Router();

sensorsRoutes
  .route('/sensors')
  .post(sensorsController.createSensor)
  .get(isAuthenticated, sensorsController.getSensors);


module.exports = sensorsRoutes;
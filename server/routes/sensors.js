const express = require('express');

const sensorsController = require('../controllers/sensors');
const { isAuthenticated } = require('../middlewares/user-access');
const sensorsRoutes = express.Router();

sensorsRoutes
  .route('/sensors')
  .post(isAuthenticated, sensorsController.createSensor)
  .get(isAuthenticated, sensorsController.getSensors)
  
sensorsRoutes
  .route('/sensors/:id')
  .get(isAuthenticated, sensorsController.getSensorById)
  .put(isAuthenticated, sensorsController.updateSensor)


module.exports = sensorsRoutes;
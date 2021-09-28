const express = require('express');
const {authentication} = require('../validators/authentication');

const sensorsController = require('../controllers/sensors');
const sensorsRoutes = express.Router();

sensorsRoutes
  .route('/sensors')
  .post(authentication, sensorsController.createSensor)
  .get(authentication,sensorsController.getSensors)
  
sensorsRoutes
  .route('/sensors/:id')
  .get(authentication, sensorsController.getSensorById)
  .put(authentication, sensorsController.updateSensor)
  .delete(authentication, sensorsController.deleteSensor)


module.exports = sensorsRoutes;
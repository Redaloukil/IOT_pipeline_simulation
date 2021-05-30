const express = require('express');

const sensorsController = require('../controllers/sensors');
const sensorsRoutes = express.Router();

sensorsRoutes
  .route('/sensors')
  .post(sensorsController.createSensor)
  .get(sensorsController.getSensors);

  //  sensorsRoutes.get('/sensors/:id')
  //   .post(sensorsRoutes.)


module.exports = sensorsRoutes;
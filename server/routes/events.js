const express = require('express')
const eventsController = require('../controllers/events');

const eventsRoutes = express.Router();

eventsRoutes.route('/events/')
    .get(eventsController.getAllEvents)

eventsRoutes
  .route('/events/:sensorID')
  .get(eventsController.getAllEventsBySensorId)
  .post(eventsController.createEvent)

  

module.exports = eventsRoutes;
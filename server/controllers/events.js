const { logger } = require('../helpers/logger');
const eventsService = require('../services/events'); 
const sensorsService = require('../services/sensors');

const eventsController = {
    getAllEvents : async (req,res) => {
        const events = await eventsService.getAllEvents();
        if(events) {
            return res.status(200).send(events);
        }
        return res.status(400).send('ressources not found')
    },
    getAllEventsBySensorId : async (req,res) => {
        const {sensorID} = req.params
        const events = await eventsService.getAllEventsBySensorId(sensorID);
        if(events) {
            return res.status(200).send(events);
        }
        return res.status(400).send('ressources not found')
    },
    createEvent : async (req,res) => { 
        const {name} = req.body
        const {sensorID} = req.params;
        const sensor = await sensorsService.getSensorById(sensorID);
        if(sensor){
            const event = await eventsService.createEventBySensorId({name, sensor});
            if (event){
                return res.status(201).send(event);
            }
            return res.status(401).send({message:'Error while creating this ressource'});
        }
        return res.status(404).send({message:"Sensor does not exist"})
    },
}


module.exports = eventsController 
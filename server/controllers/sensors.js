const { logger } = require('../helpers/logger');
const sensorsService = require('../services/sensors'); 
const {channel} = require('../helpers/message_queue');
const { QUEUE_NAME } = require('../helpers/constants');

const sensorsController = {
    getSensors : async (req,res) => {
        const sensors = await sensorsService.getSensors();
        if(sensors) {
            return res.status(200).send(sensors);
        }
        return res.status(400).send('ressources not found');
        
    },
    getSensorById: async (req , res) => {
        const sensor = await sensorsService.getSensorById(req.params.id);
        if(sensor) {
            return res.status(200).send(sensor);
        }
        return res.status(400).send('ressources not found');
    },
    createSensor : async (req,res) => { 
        const {name} = req.body
        const sensor = await sensorsService.createSensor({name});
        if (sensor){
            return res.status(201).send(sensor);
        }
        return res.status(401).send({message:'Error while creating this ressource'});
    },
    updateSensor: async (req,res) => {
        const updatedSensor = req.body;
        const sensor = await sensorsService.getSensorById(req.params.id);
        let statusChanged = updatedSensor.online !== sensor.online;
        if (updatedSensor) {
            sensor.online = updatedSensor['online'] || sensor.online;
            sensor.name = updatedSensor['name'] || sensor.name;
            await sensor.save();
            if(statusChanged) {
                const messageQueueChannel = await channel;
                messageQueueChannel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(updatedSensor)));
            } 
            return res.status(201).send(sensor);
        }  
        return res.status(401).send({message:'Error while updating the ressource'});
    },
}


module.exports = sensorsController;
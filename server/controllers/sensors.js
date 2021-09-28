const sensorsService = require('../services/sensors'); 
const { channel } = require('../helpers/message_queue');
const { QUEUE_NAME } = require('../helpers/constants');

const sensorsController = {
    getSensors : async (req,res) => {
        const sensors = await sensorsService.getSensors();
        if(sensors) {
            return res.status(200).json(sensors);
        }
        return res.status(400).send({message:'ressources not found'});
    },
    getSensorById: async (req , res) => {
        const sensor = await sensorsService.getSensorById(req.params.id);
        if(sensor) {
            return res.status(200).send(sensor);
        }
        return res.status(400).send({message:'ressources not found'});
    },
    createSensor : async (req,res) => { 
        const {name} = req.body
        console.log(name);
        const sensor = await sensorsService.createSensor({name});
        if (sensor){
            return res.status(201).send(sensor);
        }
        return res.status(401).send({message:'Error while creating this ressource'});
    },
    updateSensor: async (req,res) => {
        const updatedSensor = req.body;
        console.log(updatedSensor);
        const sensor = await sensorsService.getSensorById(req.params.id);
        if (updatedSensor) {
            sensor.online = updatedSensor['online'] || sensor.online;
            sensor.name = updatedSensor['name'] || sensor.name;
            let statusChanged = updatedSensor.online !== sensor.online;
            await sensor.save();
            if(statusChanged) {
                const messageQueueChannel = await channel;
                const result = await messageQueueChannel.assertQueue(QUEUE_NAME);
                messageQueueChannel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(updatedSensor)));
                messageQueueChannel.checkQueue(QUEUE_NAME).catch((err) => {
                    console.error(err);
                })
            } 
            return res.status(201).send(sensor);
        }  
        return res.status(401).send({message:'Error while updating the ressource'});
    },
    deleteSensor: async (req,res) => {
        const deleted = await sensorsService.deleteSensoryId(req.params.id);
        console.log(req.params.id);
        if(deleted) {
            return res.status(204).send({message:"Ressouce succefully deleted"});
        }
        return res.status(409).send(sensor, {message:"Something went wrong while deleting the ressource"});
    }
}

module.exports = sensorsController;
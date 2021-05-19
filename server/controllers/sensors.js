const { logger } = require('../helpers/logger');
const sensorsService = require('../services/sensors'); 

const sensorsController = {
    getSensors : async (req,res) => {
        const sensors = await sensorsService.getSensors();
        if(sensors) {
            return res.status(200).send(sensors);
        }
        return res.status(400).send('ressources not found')
        
    },
    createSensor : async (req,res) => { 
        const {name} = req.body
        const sensor = await sensorsService.createSensor({name});
        if (sensor){
            return res.status(201).send(sensor);
        }
        return res.status(401).send({message:'Error while creating this ressource'});
    },
    updateSensor: (req,res) => {
        // todo  
    },
    deleteSensor:(req,res,next) => {
        // todo
    }

}


module.exports = sensorsController 
const { logger } = require('../helpers/logger');
const sensorsService = require('../services/sensors'); 

const sensorsController = {
    getSensors :  (req,res,next) => {
        const sensors = sensorsService.getSensors();
        if(sensors) {
            return res.status(200).json(sensors);
        }
        return res.status(400).json('ressources not found')
        
    },
    createSensor : async (req,res,next) => {  
        const sensor = await sensorsService.createSensor(sensor);
        if (sensor){
            return res.status(200).json(req.body);
        }
        return res.status(401).json({message:'Error while creating this ressource'});
    },
    updateSensor: (req,res,next) => {
        // todo  
    },
    deleteSensor:(req,res,next) => {
        // todo
    }

}


module.exports = sensorsController 
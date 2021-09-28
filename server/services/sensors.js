const {Sensor} = require('../models/sensor');

const sensorsService = {
    getSensors : async  () => {
        try {
            const sensors = await Sensor.find({});
            return sensors
        } catch(e){
            return null;
        }
    },
    getSensorById: async (id) => {
        try {
            const sensor = await Sensor.findOne({_id:id});
            return sensor;  
        } catch(e){
            return null
        }
    },
    createSensor: async (sensor) => {
        const createdSensor = new Sensor(sensor);
        try {
            const sensor = await createdSensor.save();
            return sensor
        }catch(e){
            new Error("Error encoutered when creating ressource");
            return null 
        }
    },
    deleteSensoryId:async (id) => {
        try {
            await Sensor.deleteOne({_id:id});
            return true;
        } catch(e) {
            new Error("Error encountered while deleting the ressource");
            return false;
        }
        
    }
}

module.exports = sensorsService;
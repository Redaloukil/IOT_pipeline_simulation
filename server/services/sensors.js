const {Sensor} = require('../models/sensor');

const sensorsService = {
    getSensors : () => {
        try {
            const sensors = Sensors.find();
            return sensors
        } catch(e){
            return null;
        }
    },
    createSensor: async (sensor) => {
        const createSensor = new Sensor(sensor);
        try {
            createSensor = await sensors.save();
            return createSensor
        }catch(e){
            new Error("Error encoutered when creating ressource");
            return null 
        }
    },
}

module.exports = sensorsService;
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
            const sensor = await Sensor({_id:id});
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
            console.log(e);
            return null 
        }
    },
}

module.exports = sensorsService;
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const SensorSchema = new Schema({
    name: {
        type:String,
        required:String,
    },
});

const Sensor = mongoose.model('Sensor', SensorSchema);

module.exports = {
    Sensor,
}
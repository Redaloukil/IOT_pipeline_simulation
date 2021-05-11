const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const SensorSchema = new Schema({
    reference: String,
});

const Sensor = mongoose.model('Sensor', SensorSchema);

module.exports = {
    Sensor,
}
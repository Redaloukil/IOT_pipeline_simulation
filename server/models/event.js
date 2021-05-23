const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const eventSchema = new Schema({
    sensor: {
        type:Schema.Types.ObjectId,
        ref:'Sensor',
        required:true,
    },
    status:{
        type:String,
        default:'Not added status',
    },
}, {timestamps:true});

const Event = mongoose.model('Event', eventSchema);


module.exports = {
    Event,
}
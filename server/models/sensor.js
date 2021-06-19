const mongoose = require('mongoose');
const {Schema} = require('mongoose');
var amqp = require('amqplib/callback_api');


const SensorSchema = new Schema({
    name: {
        type:String,
        required:String,
        defaut:'sensor',
    },
    online: {
        type:String,
        default:false,
        required:true,
    },
},{ timestamps: true });


SensorSchema.on('save' , (user) => {
    if(user.name) {
        return user;
    }
    user.name = 'Sensor';
    return user;
})

const Sensor = mongoose.model('Sensor', SensorSchema);



module.exports = {
    Sensor,
}
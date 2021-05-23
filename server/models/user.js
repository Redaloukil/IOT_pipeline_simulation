const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Sensor',
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required:true,
    },
}, {timestamps:true});

const User = mongoose.model('User', userSchema);


module.exports = {
    User,
}
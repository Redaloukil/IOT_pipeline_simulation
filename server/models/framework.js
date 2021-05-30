const mongoose = require('mongoose');
const { USER_DOCUMENT } = require('./user');

const FRAMEWORK_DOCUMENT = 'Framework'

const frameworkSchema = new mongoose.Schema({
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:USER_DOCUMENT,
        required:true,
    },
    name: {
        type:String,
        required:true,
        unique:true,
    },
}, {timestamps:true});

const Framework = mongoose.model(FRAMEWORK_DOCUMENT, frameworkSchema);


Framework.on('save', async (framework) => {
    return framework;
})

module.exports = {
    Framework,
    FRAMEWORK_DOCUMENT,
}
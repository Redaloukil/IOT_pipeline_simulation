const mongoose = require('mongoose');
const config = require('../config')

module.exports = {  
    dbConnection: new mongoose.createConnection(
        'mongodb://localhost:27017/test'
        , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        }),
}
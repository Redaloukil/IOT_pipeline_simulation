const mongoose = require('mongoose');
const config = require('../config')

// module.exports = {  
//     databaseConnect: mongoose.connect(
//         `mongodb://reda:redareda@localhost:27017/db?authSource=admin`
//             , {
//                 useNewUrlParser: true, 
//                 useUnifiedTopology: true,
//             }),
//     databaseConnectOptions: {
//         useNewUrlParser: true,
//         reconnectTries: Number.MAX_VALUE,
//         reconnectInterval: 500,
//         connectTimeoutMS: 10000,
//       }
// }
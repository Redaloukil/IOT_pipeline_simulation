const env = require('dotenv').config('.env')

const config = {
    DATABASE_URL: 'mongodb://root:rootpassword@localhost:27017/db',
    PORT: env.SERVER_PORT,
    INITDB_ROOT_USERNAME: env.MONGO_INITDB_ROOT_USERNAME,
    INITDB_ROOT_PASSWORD: env.MONGO_INITDB_ROOT_PASSWORD,
}


module.exports = {
    config,
}
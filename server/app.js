const express = require('express');

const { dbConnection } = require('./helpers/db')
const { config } = require('./config');
const { logger } = require('./helpers/logger');
const sensorsRoutes = require('./routes/sensors');
const bodyParser = require('body-parser');


const app = express();

dbConnection
    .then(() => {
        logger.info("connected to the database")
    }).catch(() => {
        logger.error("error while connecting to database")
    })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('', sensorsRoutes);


const server = app.listen(3000,() => {
    logger.info('serve listening to the port 3000');
});



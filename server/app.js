const express = require('express');

const { databaseConnect, databaseConnectOptions } = require('./helpers/db')
const { config } = require('./config');
const { logger } = require('./helpers/logger');
const sensorsRoutes = require('./routes/sensors');
const eventsRoutes = require('./routes/events');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const frameworkRoutes = require('./routes/framework');

const app = express();

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
  } = process.env;

console.log(process.env);

mongoose.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/db?authSource=admin`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then((res) => {
    logger.info("connected to the database");
}).catch((err) => {
    logger.error("error while connecting to database");
    console.error(err);
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('', sensorsRoutes);
app.use('', eventsRoutes);
app.use('', userRoutes);
app.use('', frameworkRoutes);

//health shake route
app.get("/", (req, res) => {
    res.json({ message: "Application Interface for sensors." });
    next();
});

app.use((req,res,next) => {
    res.status(404).send({"message":"Not able to find this content"});
})


const server = app.listen(8080,() => {
    logger.info('serve listening to the port 8080');
})



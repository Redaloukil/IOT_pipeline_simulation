const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { logger } = require('./helpers/logger');
const sensorsRoutes = require('./routes/sensors');
const eventsRoutes = require('./routes/events');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const frameworkRoutes = require('./routes/framework');
const ws = require('ws');

const app = express();

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
  } = process.env;

// mongoose database connexion
mongoose.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/db?authSource=admin`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => {
    logger.info("connected to the database");
}).catch((err) => {
    logger.error("error while connecting to database");
    console.error(err);
})




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('', sensorsRoutes);
app.use('', eventsRoutes);
app.use('', userRoutes);
app.use('', frameworkRoutes);

app.disable('etag');


//health shake route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Application Interface for sensors." });
    res.end()
});

app.use((req,res,next) => {
    res.status(404).send({"message":"Not able to find this content"});
});

const server = app.listen(8080,() => {
    logger.info('serve listening to the port 8080');
});

const webSocketServer = new ws.Server({server})

webSocketServer.on("connection",(wss) => {
    wss.send('welcome');
    wss.on("message",(message) => {
        wss.send('welcome');   
    })
})


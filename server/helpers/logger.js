const winston = require('winston');

const logger = winston.createLogger();

logger.transports['./logs.txt'];

module.exports = {
    logger,
}
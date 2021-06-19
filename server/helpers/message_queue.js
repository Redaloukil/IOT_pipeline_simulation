const amqp = require('amqplib');


const connect = async() => {
    const connexion = await amqp.connect('amqp://message_queue:5672');
    const channel = await connexion.createChannel();
    return channel;
}

module.exports = {
    channel: connect(),
}
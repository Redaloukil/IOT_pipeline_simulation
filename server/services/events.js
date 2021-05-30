const {Event} = require('../models/event');

const eventsService = {
    getAllEvents: async () => {
        try {
            const events = await Event.find();
            return events
        } catch {
            return null
        }
    },
    getAllEventsBySensorId : async (sensorId) => {
        try {
            const events = await Event.find({sensor:sensorId});
            return events
        } catch {
            return null
        }
    },
    createEventBySensorId : async ({name,sensor}) => {
        const createEvent = new Event({name,sensor});
        try {
            const event =  await createEvent.save()
            return event;
        } catch(e) {
            return null;
        }
    }
}

module.exports = eventsService;
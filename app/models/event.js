// load the things we need
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

// define the schema for our user model
var eventSchema = mongoose.Schema({

    startTime: String,
    location: String,
    status: String,
    summary: String,
    calendar: { type: ObjectId, ref: 'calendarSchema'}
    
});

module.exports = mongoose.model('Event', eventSchema);
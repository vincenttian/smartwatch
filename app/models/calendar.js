// load the things we need
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

// define the schema for our user model
var calendarSchema = mongoose.Schema({

    id: String,
    name: String,
    user: { type: ObjectId, ref: 'userSchema'}
    
});

module.exports = mongoose.model('Calendar', calendarSchema);

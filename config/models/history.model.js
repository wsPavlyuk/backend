var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var historySchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    location:  {
        type: Object,
        address: {
            type: String,
            required: true
        },
        lat: Number,
        lng: Number
    },
    weather: [{
        type: Object
    }]
  });

  module.exports = mongoose.model('History', historySchema);;
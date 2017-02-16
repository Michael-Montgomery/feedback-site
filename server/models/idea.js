var mongoose = require('mongoose');

var ideaSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    idea: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    organization: String,
    likes: Number,
    roadMapped: {
        type: Boolean,
        required: true
    },
    bgUrl: String
});

var Idea = mongoose.model('ideas', ideaSchema);

module.exports = Idea;
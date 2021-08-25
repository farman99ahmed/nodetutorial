const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    title: {
        type: String
    },
    body: {
        type: String
    },
    author: {
        type: String,
    },
});

module.exports = mongoose.model('article', articleSchema)
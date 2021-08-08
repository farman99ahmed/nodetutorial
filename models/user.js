const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    fullname: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    profile_picture: {
        type: String,
        default: null
    },
});

module.exports = mongoose.model('user', userSchema)
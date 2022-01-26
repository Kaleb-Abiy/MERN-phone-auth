const mongoose = require('mongoose')


const usersSchema = new mongoose.Schema({

    uuid: {
        type: String,
        required: true
    },

    full_name: {
        type: String,
        required: true
    },

    bio: {
        type: String,
        required: true
    },

    joinedDate: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Users', usersSchema);
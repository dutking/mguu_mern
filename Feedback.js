const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    user: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    text: {
        type: String, 
        required: true,
        minLength: 10,
    },
})

module.exports = mongoose.model('Feedback', feedbackSchema)
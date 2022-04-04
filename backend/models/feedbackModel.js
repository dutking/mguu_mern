const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    text: {
        type: String, 
        required: [true, 'Пожалуйста, введите текст.'],
        minLength: 7,
    },
    trackId: {
        type: String,
        required: true
    },
    courseId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Feedback', feedbackSchema)
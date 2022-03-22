const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    user: String,
    text: {
        type: String, 
        required: [true, 'Пожалуйста, введите текст.'],
        minLength: 7,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Feedback', feedbackSchema)
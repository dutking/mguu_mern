const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Пожалуйст, укажите имя."]
    },
    email: {
        type: String,
        required: [true, "Пожалуйст, укажите адрес электронной почты."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Пожалуйст, укажите пароль ."]
    },
    tracks: [String]
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)
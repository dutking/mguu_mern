const mongoose = require("mongoose");

const longreadSchema = new mongoose.Schema({
  id: {
    type: String,
    default: "/longread",
  },
  type: {
    type: String,
    default: "longread",
  },
  nameRus: {
    type: String,
    required: [true, "Укажите название лонгрида."],
  },
  requiredState: {
    type: String,
    default: "completed",
  },
  evaluated: {
    type: Boolean,
    default: true,
  },
  structure: {
    type: Array,
    default: ["longread", "Лонгрид"],
  },
});

module.exports = mongoose.model("Longread", longreadSchema);

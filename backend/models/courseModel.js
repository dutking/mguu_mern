const mongoose = require("mongoose");
const Test = require("testModel");
const Longread = require("longreadModel");

const courseSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Укажите идентификатор курса."],
  },
  type: {
    type: String,
    default: "course",
  },
  nameRus: {
    type: String,
    required: [true, "Укажите название курса."],
  },
  pageId: {
    type: String,
    required: [true, "Укажите идентификатор соответствующего пакета."],
  },
  passingScore: {
    type: String,
    default: "max",
  },
  resume: {
    type: Boolean,
    default: true,
  },
  scoringFunction: {
    type: String,
    default: "",
  },
  includedIn: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Track",
      required: false,
    },
  ],
  interactionType: {
    type: String,
    required: true,
    enum: ["Test", "Longread"],
  },
  interactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "interactionType",
    },
  ],
});

module.exports = mongoose.model("Course", courseSchema);

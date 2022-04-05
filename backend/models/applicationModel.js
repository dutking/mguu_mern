const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    appliedFor: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Пожалуйста, укажите ваши ФИО."],
    },
    occupation: {
      type: String,
      required: [true, "Пожалуйста, укажите Вашу должность."],
    },
    organization: {
      type: String,
      required: [true, "Пожалуйста, укажите Вашу организацию."],
    },
    email: {
      type: String,
      required: [true, "Пожалуйста, укажите Ваш адрес электронной почты."],
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Пожалуйста, укажите Ваш номер телефона."],
    },
    subordinates: {
      direct: {
        type: String,
        required: [
          true,
          "Пожалуйста, укажите количество сотрудников в прямом подчинении.",
        ],
      },
      functional: {
        type: String,
        required: [
          true,
          "Пожалуйста, укажите количество сотрудников в функциональном подчинении.",
        ],
      },
    },
    experience: {
      type: String,
      required: [true, "Пожалуйста, укажите Ваш опыт."],
    },
    timeAvailable: {
      type: String,
      required: [
        true,
        "Пожалуйста, укажите количество располагаемого времени.",
      ],
    },
    strengths: {
      type: String,
      required: [true, "Пожалуйста, укажите Ваши сильные стороны."],
    },
    devZones: {
      type: String,
      required: [true, "Пожалуйста, укажите Ваши зоны развития."],
    },
    complications: {
      type: String,
      required: [
        true,
        "Пожалуйста, укажите сложности, с которыми сталкиваетесь.",
      ],
    },
    task: {
      type: String,
      required: [true, "Пожалуйста, опишите актуальную задачу."],
    },
    goal: {
      type: String,
      required: [true, "Пожалуйста, сформулируйте приоритетную цель."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);

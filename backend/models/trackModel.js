const mongoose = require("mongoose");

const globalMetricSchema = new mongoose.Schema({
  iri: {
    type: String,
    required: true,
  },
  nameRus: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  metricType: {
    type: String,
    required: true,
  },
  metricProfile: {
    type: String,
    required: true,
  },
  metricExtension: {
    type: String,
    required: true,
  },
  statementFunction: {
    type: String,
    required: false,
  },
  requiredState: {
    type: String,
    required: true,
  },
});

const globalPoolSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  value: {
    initial: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 10,
    },
  },
  name: {
    type: String,
    required: true,
  },
  scoringFunction: {
    type: String,
    required: false,
  },
  image: {
    type: Boolean,
    default: false,
  },
});

const trackSchema = new mongoose.Schema(
  {
    iri: {
      type: String,
      required: [true, "Пожалуйста, укажите IRI трека."],
    },
    nameRus: {
      type: String,
      required: [true, "Пожалуйста, укажите название трека."],
    },
    instruction: {
      mc: {
        type: String,
        required: true,
        default: "Выберите верный ответ.",
      },
      mr: {
        type: String,
        required: true,
        default: "Выберите от <minReponses> до <maxResponses> ответов.",
      },
      fillin: {
        type: String,
        required: true,
        default: "Введите ваш ответ.",
      },
      longfillin: {
        type: String,
        required: true,
        default: "Введите ваш ответ.",
      },
      range: {
        type: String,
        required: true,
        default: "Выставите требуемое значение.",
      },
    },
    buttons: {
      submit: {
        initial: {
          type: String,
          required: false,
          default: "Ответить",
        },
        completed: {
          type: String,
          required: false,
          default: "Ответ принят",
        },
        icon: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      tryAgain: {
        initial: {
          type: String,
          required: false,
          default: "Попробовать еще раз",
        },
        icon: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      continue: {
        initial: {
          type: String,
          required: false,
          default: "Следующий вопрос",
        },
        last: {
          type: String,
          required: false,
          default: "Завершить попытку",
        },
        icon: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      next: {
        initial: {
          type: String,
          required: false,
          default: "Далее",
        },
      },
    },
    globalMetrics: [
      {
        type: globalMetricSchema,
        required: false,
      },
    ],
    globalPools: [
      {
        type: globalPoolSchema,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Track", trackSchema);

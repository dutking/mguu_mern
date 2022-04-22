const mongoose = require("mongoose");

const globalMetricSchema = new mongoose.Schema({
  iri: {
    type: String,
    required: [true, "Укажите идентификатор метрики."],
  },
  nameRus: {
    type: String,
    required: [true, "Укажите название метрики."],
  },
  description: {
    type: String,
    default: "",
  },
  metricType: {
    type: String,
    required: [true, "Укажите metricType."],
  },
  metricProfile: {
    type: String,
    required: [true, "Укажите metricProfile."],
  },
  metricExtension: {
    type: String,
    required: false,
  },
  statementFunction: {
    type: String,
    required: false,
  },
  requiredState: {
    type: String,
    default: "completed",
  },
});

const globalPoolSchema = new mongoose.Schema({
  poolId: {
    type: String,
    required: [true, "Укажите идентификатор пула."],
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
    required: [true, "Укажите название пула."],
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
      required: [true, "Пожалуйста, укажите идентификатор трека в виде IRI."],
    },
    type: {
      type: String,
      default: "track",
    },
    nameRus: {
      type: String,
      required: [true, "Пожалуйста, укажите название трека."],
    },
    defaultSettings: {
      test: {
        instructions: {
          mc: {
            type: String,
            default: "Выберите верный ответ.",
          },
          mr: {
            type: String,
            default: "Выберите от <minReponses> до <maxResponses> ответов.",
          },
          fillin: {
            type: String,
            default: "Введите ваш ответ.",
          },
          longfillin: {
            type: String,
            default: "Введите ваш ответ.",
          },
          range: {
            type: String,
            default: "Выставите требуемое значение.",
          },
        },
        displayMode: {
          type: String,
          default: "one_by_one",
        },
        submitMode: {
          type: String,
          default: "each",
        },
        counter: {
          type: String,
          default: "Вопрос <orderNum> из <amountOfQuestions>",
        },
        shuffleQuestions: {
          type: Boolean,
          default: true,
        },
        attemptsPerTest: {
          type: Number,
          default: 0,
        },
        attemptsPerQuestion: {
          type: Number,
          default: 0,
        },
        tryAgain: {
          type: String,
          default: "untill_all_attempts",
        },
        passingScore: {
          type: String,
          default: "80%",
        },
        scoring: {
          type: String,
          default: "questions",
        },
        buttons: {
          submit: {
            initial: {
              type: String,
              default: "Ответить",
            },
            completed: {
              type: String,
              default: "Ответ принят",
            },
            icon: {
              type: Boolean,
              default: false,
            },
          },
          tryAgain: {
            initial: {
              type: String,
              default: "Попробовать еще раз",
            },
            icon: {
              type: Boolean,
              default: false,
            },
          },
          continue: {
            initial: {
              type: String,
              default: "Следующий вопрос",
            },
            last: {
              type: String,
              default: "Завершить попытку",
            },
            icon: {
              type: Boolean,
              default: false,
            },
          },
        },
      },
      longread: {
        buttons: {
          next: {
            initial: {
              type: String,
              default: "Далее",
            },
          },
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
    consistsOf: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: false,
      },
    ],
    courses: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Track", trackSchema);

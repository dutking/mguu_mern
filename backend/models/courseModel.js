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
  buttons: {
    next: {
      initial: {
        type: String,
        default: "Далее",
      },
    },
  },
});

const poolSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const answerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Укажите идентификатор варианта ответа."],
  },
  correct: {
    type: Boolean,
    required: [true, "Укажите правильность ответа."],
  },
  text: {
    type: String,
    default: "",
  },
  feedback: {
    type: String,
    default: "",
  },
  weight: {
    type: Number,
    default: 1,
  },
  pools: [
    {
      type: poolSchema,
      required: false,
    },
  ],
  next: {
    type: String,
    required: false,
  },
});

const questionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Укажите идентификатор вопроса."],
  },
  type: {
    type: String,
    required: [true, "Укажите тип вопроса."],
  },
  subtype: {
    type: String,
    required: false,
  },
  group: {
    type: String,
    required: false,
  },
  instruction: {
    type: String,
    default: "",
  },
  validation: {},
  shuffle: {
    type: Boolean,
    default: true,
  },
  weight: {
    type: Number,
    default: 1,
  },
  story: {
    type: String,
    default: "",
  },
  question: {
    type: String,
    required: [true, "Укажите текст вопроса."],
  },
  feedback: {
    correct: {
      type: String,
      default: "",
    },
    incorrect: {
      type: String,
      default: "",
    },
  },
  showPoolsInFeedback: {
    type: Boolean,
    default: false,
  },
  help: [
    {
      type: String,
      required: false,
    },
  ],
  answers: [
    {
      type: answerSchema,
      required: true,
    },
  ],
});

const testSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Укажите идентификатор теста."],
  },
  type: {
    type: String,
    default: "test",
  },
  classes: {
    type: String,
    default: "",
  },
  nameRus: {
    type: String,
    required: [true, "Укажите название теста."],
  },
  description: {
    type: String,
    default: "",
  },
  instruction: {
    type: String,
    default: "",
  },
  commonQuestion: {
    type: String,
    default: "",
  },
  counter: {
    type: String,
    default: "Вопрос <orderNum> из <amountOfQuestions>",
  },
  displayMode: {
    type: String,
    default: "one_by_one",
  },
  submitMode: {
    type: String,
    default: "each",
  },
  requiredState: {
    type: String,
    default: "passed",
  },
  evaluated: {
    type: Boolean,
    default: true,
  },
  attemptsPerTest: {
    type: Number,
    default: 0,
  },
  attemptsPerQuestion: {
    type: Number,
    default: 1,
  },
  amountOfQuestions: {
    type: String,
    default: "0",
  },
  passingScore: {
    type: String,
    default: "80%",
  },
  shuffleQuestions: {
    type: Boolean,
    default: true,
  },
  scoring: {
    type: String,
    default: "questions",
  },
  tryAgain: {
    type: String,
    default: "untill_all_attempts",
  },
  scoringFunction: {
    type: String,
    default: "",
  },
  metricName: {
    type: String,
    default: "",
  },
  metrics: [
    {
      type: String,
      required: false,
    },
  ],
  weight: {
    type: Number,
    default: 1,
  },
  feedback: {
    chartFunction: {
      type: String,
      default: "",
    },
    common: {
      type: String,
      default: "",
    },
    passed: {
      type: String,
      default: "",
    },
    failed: {
      type: String,
      default: "",
    },
    byScore: [{}],
    byAttempt: [{}],
    showUserPoolsResult: {
      type: Boolean,
      default: false,
    },
    markQuestionsCorrectness: {
      type: String,
      default: "none",
    },
    markResponsesCorrectness: {
      type: String,
      default: "none",
    },
    showCorrectAnswers: {
      type: String,
      default: "none",
    },
    hideElements: [
      {
        type: String,
        required: false,
        default: [],
      },
    ],
    answersFeedbackMode: {
      type: String,
      default: "question",
    },
  },
  resume: {
    resume: {
      type: Boolean,
      default: true,
    },
    common: {
      type: String,
      default: "",
    },
    passed: {
      type: String,
      default: "",
    },
    failed: {
      type: String,
      default: "",
    },
    byScore: [{}],
    byAttempt: [{}],
  },
  questionsSettings: {
    feedback: {
      hideElements: [
        {
          type: String,
          required: false,
        },
      ],
    },
    resume: {
      hideElements: [
        {
          type: String,
          required: false,
        },
      ],
    },
  },
  statements: {
    send: {
      requiredState: {
        type: String,
      },
      message: {
        type: String,
      },
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
  structure: {
    type: Array,
    default: ["test", "Тестирование"],
  },
  iterables: [
    {
      type: questionSchema,
      required: true,
    },
  ],
});

const courseSchema = new mongoose.Schema(
  {
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
    interactions: {
      tests: [
        {
          type: testSchema,
          required: false,
        },
      ],
      longread: {
        type: longreadSchema,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);

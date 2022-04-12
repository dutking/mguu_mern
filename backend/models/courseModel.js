const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({});

const testSchema = new mongoose.Schema({
  iri: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "test",
  },
  nameRus: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  instruction: {
    type: String,
    default: "",
  },
  counter: {
    type: String,
    default: "<orderNum>",
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
    default: "num:0",
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
    byScore: {
      type: String,
      default: "",
    },
    byAttempt: {
      type: String,
      default: "",
    },
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
    hideElements: {
      type: String,
      default: "",
    },
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
    byScore: {
      type: String,
      default: "",
    },
    byAttempt: {
      type: String,
      default: "",
    },
  },
  questionsSettings: {
    feedback: {
      hideElements: {
        type: String,
        default: "",
      },
    },
    resume: {
      hideElements: {
        type: String,
        default: "",
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
  iterables: [
    {
      type: questionSchema,
      required: true,
    },
  ],
});

const longreadSchema = new mongoose.Schema({
  iri: {
    type: String,
    default: "/longread",
  },
  type: {
    type: String,
    default: "longread",
  },
  nameRus: {
    type: String,
    required: true,
  },
  requiredState: {
    type: String,
    required: true,
  },
  evaluated: {
    type: Boolean,
    required: true,
  },
  structure: {
    type: String,
    required: true,
  },
});

const courseSchema = new mongoose.Schema({
  iri: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "course",
  },
  nameRus: {
    type: String,
    required: true,
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
  interactions: [
    {
      type: longreadSchema || testSchema,
      required: false,
    },
  ],
});

module.exports = mongoose.model("Course", courseSchema);

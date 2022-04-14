const asyncHandler = require("express-async-handler");

const Track = require("../models/trackModel");

// @desc Get tracks
// @route GET /api/tracks
// @access Private
const getTracks = asyncHandler(async (req, res) => {
  const tracks = await Track.find();
  res.status(200).json(tracks);
});

// @desc Get track
// @route GET /api/tracks/:id
// @access Private
const getTrack = asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id);
  res.status(200).json(track);
});

// @desc Set track
// @route POST /api/tracks
// @access Private
const setTrack = asyncHandler(async (req, res) => {
  if (!req.body.type === "track") {
    res.status(400);
    throw new Error("Это не трек. Укажите type: 'track'");
  }

  const track = await Track.create({
    iri: req.body.iri,
    nameRus: req.body.nameRus,
    defaultSettings: {
      test: {
        instructions: {
          mc: req.body.instruction.mc || "Выберите верный ответ.",
          mr:
            req.body.instruction.mr ||
            "Выберите от <minReponses> до <maxResponses> ответов.",
          longfillin: req.body.instruction.longfillin || "Введите ваш ответ.",
          fillin: req.body.instruction.fillin || "Введите ваш ответ.",
          range: req.body.instruction.range || "Выставите требуемое значение.",
        },
        buttons: {
          submit: {
            initial: req.body.buttons.submit.initial || "Ответить",
            completed: req.body.buttons.submit.completed || "Ответ принят",
            icon: req.body.buttons.submit.icon || false,
          },
          tryAgain: {
            initial: req.body.buttons.tryAgain.initial || "Попробовать еще раз",
            icon: req.body.buttons.tryAgain.icon || false,
          },
          continue: {
            initial: req.body.buttons.continue.initial || "Следующий вопрос",
            last: req.body.buttons.continue.last || "Завершить попытку",
          },
        },
      },
      longread: {
        buttons: {
          next: {
            initial: req.body.buttons.continue.initial || "ДАЛЕЕ",
          },
        },
      },
    },
    globalMetrics: req.body.globalMetrics || [],
    globalPools: req.body.globalPools || [],
    consistsOf: req.body.consistsOF || [],
  });

  res.status(200).json(track);
});

// @desc Update track
// @route PUT /api/tracks/:id
// @access Private
const updateTrack = asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id);

  if (!track) {
    res.status(400);
    throw new Error("Запись не найдена.");
  }

  const updatedTrack = await Track.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTrack);
});

// @desc Delete track
// @route DELETE /api/tracks/:id
// @access Private
const deleteTrack = asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id);

  if (!track) {
    res.status(400);
    throw new Error("Запись не найдена.");
  }

  const deletedTrack = await Track.findByIdAndDelete(req.params.id);

  res.status(200).json(deletedTrack);
});

module.exports = {
  getTracks,
  getTrack,
  setTrack,
  updateTrack,
  deleteTrack,
};

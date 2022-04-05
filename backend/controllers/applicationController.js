const asyncHandler = require("express-async-handler");

const Application = require("../models/applicationModel");

// @desc Get applications
// @route GET /api/applications
// @access Private
const getApplications = asyncHandler(async (req, res) => {
  //let feedbacks = await Promise.allSettled(tracks.map((t) => Feedback.find({track: t})))
  //const feedbacks = await Feedback.find({trackId: {$in: tracks}})
  const applications = await Application.find();
  res.status(200).json(applications);
  //res.status(200).json(feedbacks.map(f => f.value))
});

// @desc Set application
// @route POST /api/applications
// @access Private
const setApplication = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Заполните все поля.");
  }

  const application = await Application.create({
    name: req.body.name,
    occupation: req.body.occupation,
    organization: req.body.organization,
    email: req.body.email,
    phone: req.body.phone,
    subordinates: {
      direct: req.body.subordinates.direct,
      functional: req.body.subordinates.functional,
    },
    experience: req.body.experience,
    timeAvailable: req.body.timeAvailable,
    strengths: req.body.strength,
    devZones: req.body.devZones,
    complications: req.body.complications,
    task: req.body.task,
    goal: req.body.goal,
  });

  res.status(200).json(application);
});

// @desc Update application
// @route PUT /api/applications/:id
// @access Private
const updateApplication = asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id);

  if (!application) {
    res.status(400);
    throw new Error("Запись не найдена.");
  }

  const updatedApplication = await Application.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedApplication);
});

// @desc Delete application
// @route DELETE /api/applications/:id
// @access Private
const deleteApplication = asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id);

  if (!application) {
    res.status(400);
    throw new Error("Запись не найдена.");
  }

  const deletedApplication = await Application.findByIdAndDelete(req.params.id);

  res.status(200).json(deletedApplication);
});

module.exports = {
  getApplications,
  setApplication,
  updateApplication,
  deleteApplication,
};

const asyncHandler = require("express-async-handler");

const Course = require("../models/courseModel");

// @desc Get courses
// @route GET /api/courses
// @access Private
const getCourses = asyncHandler(async (req, res) => {
  //let feedbacks = await Promise.allSettled(tracks.map((t) => Feedback.find({track: t})))
  //const feedbacks = await Feedback.find({trackId: {$in: tracks}})
  const courses = await Course.find();
  res.status(200).json(courses);
  //res.status(200).json(feedbacks.map(f => f.value))
});

// @desc Set course
// @route POST /api/courses
// @access Private
const setCourse = asyncHandler(async (req, res) => {
  if (!req.body.type === "course") {
    res.status(400);
    throw new Error("Это не курс. Укажите type: 'course'");
  }

  const course = await Course.create({
    iri: req.body.iri,
    type: req.body.type,
    nameRus: req.body.nameRus,
    passingScore: req.body.passingScore,
    resume: req.body.resume,
    scoringFunction: req.body.scoringFunction || "",
    includedIn: req.body.includedIn || [],
    interactions: req.body.interactions || [],
  });

  res.status(200).json(course);
});

// @desc Update course
// @route PUT /api/courses/:id
// @access Private
const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(400);
    throw new Error("Запись не найдена.");
  }

  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedCourse);
});

// @desc Delete course
// @route DELETE /api/courses/:id
// @access Private
const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(400);
    throw new Error("Запись не найдена.");
  }

  const deletedCourse = await Course.findByIdAndDelete(req.params.id);

  res.status(200).json(deletedCourse);
});

module.exports = {
  getCourses,
  setCourse,
  updateCourse,
  deleteCourse,
};

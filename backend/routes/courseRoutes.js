const express = require("express");
const router = express.Router();
const {
  getCourses,
  getCourse,
  setCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

// const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getCourses).post(setCourse);

router.route("/:id").get(getCourse).delete(deleteCourse).put(updateCourse);

module.exports = router;

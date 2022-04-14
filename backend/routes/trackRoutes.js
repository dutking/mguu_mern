const express = require("express");
const router = express.Router();
const {
  getTracks,
  getTrack,
  getCompleteTrack,
  setTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/trackController");

// const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getTracks).post(setTrack);

router.route("/:id").get(getTrack).delete(deleteTrack).put(updateTrack);

router.route("/complete/:id").get(getCompleteTrack);

module.exports = router;

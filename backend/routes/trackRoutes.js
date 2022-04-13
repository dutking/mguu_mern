const express = require("express");
const router = express.Router();
const {
  getTracks,
  getTrack,
  setTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/trackController");

// const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getTracks).post(setTrack);

router.route("/:id").get(getTrack).delete(deleteTrack).put(updateTrack);

module.exports = router;

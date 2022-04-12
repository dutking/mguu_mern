const express = require("express");
const router = express.Router();
const {
  getTracks,
  setTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/trackController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTracks).post(setTrack);

router.route("/:id").delete(protect, deleteTrack).put(updateTrack);

module.exports = router;

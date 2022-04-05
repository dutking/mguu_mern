const express = require("express");
const router = express.Router();
const {
  getApplications,
  setApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/applicationController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getApplications).post(setApplication);

router.route("/:id").delete(protect, deleteApplication).put(updateApplication);

module.exports = router;

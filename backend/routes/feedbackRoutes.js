const express = require("express")
const router = express.Router()
const {getFeedbacks, setFeedback, updateFeedback, deleteFeedback} = require('../controllers/feedbackController')
const {protect} = require("../middleware/authMiddleware")

router.route('/').get(protect, getFeedbacks).post(setFeedback)

router.route('/:id').delete(deleteFeedback).put(updateFeedback)

module.exports = router
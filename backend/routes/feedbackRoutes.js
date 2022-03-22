const express = require("express")
const router = express.Router()
const {getFeedbacks, setFeedback, updateFeedback, deleteFeedback} = require('../controllers/feedbackController')

router.route('/').get(getFeedbacks).post(setFeedback)

router.route('/:id').delete(deleteFeedback).put(updateFeedback)

module.exports = router
const asyncHandler = require('express-async-handler')

// @desc Get feedbacks
// @route GET /api/feedbacks
// @access Private
const getFeedbacks = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get feedbacks'})
})

// @desc Set feedback
// @route POST /api/feedbacks
// @access Private
const setFeedback = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Введите Ваш отзыв.')
    }
    res.status(200).json({message: 'Set feedback'})
})

// @desc Update feedback
// @route PUT /api/feedbacks/:id
// @access Private
const updateFeedback = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update feedback ${req.params.id}`})
})

// @desc Delete feedback
// @route DELETE /api/feedbacks/:id
// @access Private
const deleteFeedback = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete feedback ${req.params.id}`})
})

module.exports = {
    getFeedbacks,
    setFeedback,
    updateFeedback,
    deleteFeedback
}
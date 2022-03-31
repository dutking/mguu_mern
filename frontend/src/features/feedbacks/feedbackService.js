import axios from "axios";

const API_URL = "/api/feedbacks/";

// Get feedbacks
const getAllFeedbacks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const feedbackService = {
  getAllFeedbacks,
};

export default feedbackService;

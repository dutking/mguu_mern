import axios from "axios";

const API_URL = "/api/applications/";

// Get feedbacks
const getAllApplications = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const applicationService = {
  getAllApplications,
};

export default applicationService;

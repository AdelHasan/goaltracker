import axios from "axios";

API_URL = "/api/goals/";

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, config, goalData);

  return response.data;
};

const goalService = {
  createGoal,
};

export default goalService;

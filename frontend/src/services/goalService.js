import axios from 'axios';

const API_URL = 'http://localhost:2000/api/goals';

// create new goal function
const createGoal = async (goalData, token) => {
  try {
    // send the request to the server
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // make the request to the server
    const response = await axios.post(API_URL, goalData, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating goal:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

// Get user goals
const getGoals = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(API_URL, config);

    return response.data;
  } catch (error) {
    console.error('Error getting goals:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

// Delete user goal
const deleteGoal = async (goalId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(API_URL + goalId, config);

    return response.data;
  } catch (error) {
    console.error('Error deleting goal:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;

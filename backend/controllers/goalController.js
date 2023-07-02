const asyncHandler = require('express-async-handler');
// @desc: get all goals
// @route: GET /api/goals
// @access: private
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'get the goals from the database',
  });
});
// @desc: set goal
// @route: POST /api/goals
// @access: private
const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.goal) {
    res.status(400);
    throw new Error('Please provide a goal');
  }
  res.status(200).json({
    message: 'set the goals to the database',
  });
});

// @desc: update goal
// @route: PUT /api/goals/:id
// @access: private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `update the goal with id ${req.params.id}`,
  });
});
// @desc: delete goal
// @route: DELETE /api/goals/:id
// @access: private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `delete the goal with id ${req.params.id}`,
  });
});
module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};

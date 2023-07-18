const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');
// @desc: get all goals
// @route: GET /api/goals
// @access: private
const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find({
    user: req.user._id,
  });
  res.status(200).json(goals);
});
// @desc: set goal
// @route: POST /api/goals
// @access: private
const setGoal = asyncHandler(async (req, res) => {
  // check if the goal is provided
  if (!req.body.goal) {
    res.status(400);
    throw new Error('Please provide a goal');
  }

  const goal = await Goal.create({
    text: req.body.goal,
    user: req.user._id,
  });

  res.status(200).json(goal);
});

// @desc: update goal
// @route: PUT /api/goals/:id
// @access: private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  // check for the user

  if (!req.user) {
    res.status(401);
    throw new Error('user not found');
  }

  // check if the user owns the goal
  if (goal.user.toString() !== req.user._id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});
// @desc: delete goal
// @route: DELETE /api/goals/:id
// @access: private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  // check if goal exists
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  // check for the user

  if (!req.user) {
    res.status(401);
    throw new Error('user not found');
  }
  console.log(goal.user.toString(), req.user._id.toString());
  // check if the user owns the goal
  if (goal.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  await Goal.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};

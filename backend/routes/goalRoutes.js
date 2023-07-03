const express = require('express');
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

const protect = require('../middleware/authMiddleware');

router.route('/').get(protect, getGoal).post(protect, setGoal);
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;

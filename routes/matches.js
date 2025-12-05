// routes/matches.js
const express = require('express');
const router = express.Router();
const matchStatsController = require('../controllers/matchStatsController');

// GET /matches/:scheduleId/stats
router.get('/:scheduleId/stats', matchStatsController.getMatchStatsByScheduleId);

module.exports = router;

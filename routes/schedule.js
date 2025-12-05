// routes/schedule.js
const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// 순서 중요: 먼저 리스트, 그 다음 상세
// GET /schedule
router.get('/', scheduleController.getSchedule);

// GET /schedule/:id
router.get('/:id', scheduleController.getScheduleById);

module.exports = router;

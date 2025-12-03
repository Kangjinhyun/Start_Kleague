// routes/schedule.js
const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// GET /schedule
router.get('/', scheduleController.getSchedule);

module.exports = router;

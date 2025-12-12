// routes/schedule.js
const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// 1) 라운드별 경기 목록
// GET /schedule/round/:round?season=2025
router.get('/round/:round', scheduleController.getScheduleByRound);

// 2) 시즌 + 팀 tri_code 기준 일정
// GET /schedule/:season/team/:triCode
router.get('/:season/team/:triCode', scheduleController.getScheduleBySeasonAndTeam);

// 3) 개별 경기 일정 조회
// GET /schedule/match/:scheduleId
router.get('/match/:scheduleId', scheduleController.getScheduleById);

// 4) 시즌 전체 일정
// GET /schedule/:season
router.get('/:season', scheduleController.getScheduleBySeason);

module.exports = router;

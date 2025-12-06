// routes/matches.js
const express = require('express');
const router = express.Router();

const matchStatsController = require('../controllers/matchStatsController');
const matchesController = require('../controllers/matchesController');

// 경기 상세 (일정 + 팀 정보 + 스탯(있으면))
router.get('/:scheduleId', matchesController.getMatchDetail);

// 경기 스탯만 따로 보고 싶을 때 (기존 엔드포인트 유지)
router.get('/:scheduleId/stats', matchStatsController.getMatchStatsByScheduleId);

module.exports = router;

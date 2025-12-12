// routes/matches.js
const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matchesController');

// 경기 상세
// GET /matches/:scheduleId
router.get('/:scheduleId', matchesController.getMatchDetail);

// 경기 스탯 조회
// GET /matches/:scheduleId/stats
router.get('/:scheduleId/stats', matchesController.getMatchStats);

// 경기 스탯 입력/수정
// PUT /matches/:scheduleId/stats
router.put('/:scheduleId/stats', matchesController.upsertMatchStats);

module.exports = router;

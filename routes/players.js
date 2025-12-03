// routes/players.js
const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');

// 헬스 체크
router.get('/health', playersController.healthCheck);

// 🔥 선수 상세
// GET /players/:playerId
router.get('/:playerId', playersController.getPlayerById);

module.exports = router;

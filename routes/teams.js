// routes/teams.js
const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamsController');

// GET /teams
router.get('/', teamsController.getTeams);

// ⚠️ 더 구체적인 경로를 위에 두기
// GET /teams/:triCode/players
router.get('/:triCode/players', teamsController.getPlayersByTeam);

// GET /teams/:triCode  (팀 상세)
router.get('/:triCode', teamsController.getTeamDetail);

module.exports = router;

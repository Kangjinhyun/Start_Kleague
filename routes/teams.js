// routes/teams.js
const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamsController');

// 팀 목록
router.get('/', teamsController.getTeams);

// 팀별 시즌 경기 일정
router.get('/:triCode/matches', teamsController.getTeamMatches);

// 팀별 선수 목록
router.get('/:teamId/players', teamsController.getTeamPlayers);

module.exports = router;

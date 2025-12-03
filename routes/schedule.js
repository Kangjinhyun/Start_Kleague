const express = require("express");
const router = express.Router();

const {
  getScheduleBySeason,
  getScheduleByRound,
  getScheduleByTeamInSeason,
  getRoundLabel,
  teams,
} = require("../services/kleagueService");

// 🔹 1) 시즌 전체 일정
// GET /api/schedule/2025/K1
router.get("/:season/:league", (req, res) => {
  const { season, league } = req.params;
  const year = Number(season);

  const matches = getScheduleBySeason(year, league);
  const withTeamNames = matches.map((m) => ({
    ...m,
    roundLabel: getRoundLabel(m),
    homeTeamName: teams[m.homeTeamId]?.name,
    awayTeamName: teams[m.awayTeamId]?.name,
  }));

  res.json(withTeamNames);
});

// 🔹 2) 특정 라운드 일정
// GET /api/schedule/2025/K1/round/1
router.get("/:season/:league/round/:round", (req, res) => {
  const { season, league, round } = req.params;
  const year = Number(season);
  const roundNum = Number(round);

  const matches = getScheduleByRound(year, league, roundNum);
  const withTeamNames = matches.map((m) => ({
    ...m,
    roundLabel: getRoundLabel(m),
    homeTeamName: teams[m.homeTeamId]?.name,
    awayTeamName: teams[m.awayTeamId]?.name,
  }));

  res.json(withTeamNames);
});

// 🔹 3) 특정 팀의 시즌 전체 일정
// GET /api/schedule/2025/K1/team/1005
router.get("/:season/:league/team/:teamId", (req, res) => {
  const { season, league, teamId } = req.params;
  const year = Number(season);
  const teamIdNum = Number(teamId);

  const matches = getScheduleByTeamInSeason(year, league, teamIdNum);
  const withTeamNames = matches.map((m) => ({
    ...m,
    roundLabel: getRoundLabel(m),
    homeTeamName: teams[m.homeTeamId]?.name,
    awayTeamName: teams[m.awayTeamId]?.name,
  }));

  res.json(withTeamNames);
});

module.exports = router;

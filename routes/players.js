const express = require("express");
const router = express.Router();
const { getPlayersByTeamInSeasonFromDB } = require("../services/dbPlayersService");

router.get("/:teamId", async (req, res) => {
  const { teamId } = req.params;
  const { season = 2025, league = "K1" } = req.query;

  try {
    const players = await getPlayersByTeamInSeasonFromDB(season, league, teamId);
    res.json(players);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

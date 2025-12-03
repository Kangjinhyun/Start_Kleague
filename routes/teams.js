const express = require("express");
const router = express.Router();
const { getAllTeamsFromDB } = require("../services/dbTeamsService");

router.get("/", async (req, res) => {
  try {
    const teams = await getAllTeamsFromDB();
    res.json(teams);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

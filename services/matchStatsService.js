// services/matchStatsService.js
const { pool } = require('../db');

async function getMatchStats(scheduleId) {
  const query = `
    SELECT
      schedule_id,
      home_score,
      away_score,
      home_shots,
      away_shots,
      home_shots_on_target,
      away_shots_on_target,
      home_possession,
      away_possession
    FROM match_stats
    WHERE schedule_id = $1
  `;

  const { rows } = await pool.query(query, [scheduleId]);
  return rows[0] || null;
}

async function upsertMatchStats(scheduleId, stats) {
  const query = `
    INSERT INTO match_stats (
      schedule_id,
      home_score,
      away_score,
      home_shots,
      away_shots,
      home_shots_on_target,
      away_shots_on_target,
      home_possession,
      away_possession
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9
    )
    ON CONFLICT (schedule_id)
    DO UPDATE SET
      home_score = EXCLUDED.home_score,
      away_score = EXCLUDED.away_score,
      home_shots = EXCLUDED.home_shots,
      away_shots = EXCLUDED.away_shots,
      home_shots_on_target = EXCLUDED.home_shots_on_target,
      away_shots_on_target = EXCLUDED.away_shots_on_target,
      home_possession = EXCLUDED.home_possession,
      away_possession = EXCLUDED.away_possession
    RETURNING *;
  `;

  const values = [
    scheduleId,
    stats.homeScore ?? null,
    stats.awayScore ?? null,
    stats.homeShots ?? null,
    stats.awayShots ?? null,
    stats.homeShotsOnTarget ?? null,
    stats.awayShotsOnTarget ?? null,
    stats.homePossession ?? null,
    stats.awayPossession ?? null,
  ];

  const { rows } = await pool.query(query, values);
  return rows[0];
}

module.exports = {
  getMatchStats,
  upsertMatchStats,
};

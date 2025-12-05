// services/matchStatsService.js
const { pool } = require('../db');

// 특정 경기(schedule_id 기준)의 스탯 조회
async function getMatchStatsByScheduleId(scheduleId) {
  const query = `
    SELECT
      ms.id,
      ms.schedule_id,
      ms.home_score,
      ms.away_score,
      ms.home_shots,
      ms.away_shots,
      ms.home_shots_on_target,
      ms.away_shots_on_target,
      ms.home_possession,
      ms.away_possession,
      ms.home_corners,
      ms.away_corners,
      ms.home_fouls,
      ms.away_fouls,
      ms.home_yellow_cards,
      ms.away_yellow_cards,
      ms.home_red_cards,
      ms.away_red_cards,
      ms.created_at,
      ms.updated_at
    FROM match_stats ms
    WHERE ms.schedule_id = $1
    LIMIT 1;
  `;

  const { rows } = await pool.query(query, [scheduleId]);
  return rows[0] || null;
}

module.exports = {
  getMatchStatsByScheduleId,
};

// services/scheduleService.js
const { pool } = require('../db');

// 시즌 기준 전체 일정 조회
async function getScheduleBySeason(season) {
  const query = `
    SELECT
      s.id,
      s.season,
      s.league,
      s.round,
      s.match_datetime,
      s.stadium,
      s.status,
      s.home_team_id,
      th.tri_code AS home_tri_code,
      th.name     AS home_team_name,
      s.away_team_id,
      ta.tri_code AS away_tri_code,
      ta.name     AS away_team_name
    FROM schedule s
    JOIN teams th ON s.home_team_id = th.id
    JOIN teams ta ON s.away_team_id = ta.id
    WHERE s.season = $1
    ORDER BY s.match_datetime;
  `;

  const { rows } = await pool.query(query, [season]);
  return rows;
}

// 시즌 + 팀 tri_code 기준 일정 조회 (home/away 모두 포함)
async function getScheduleBySeasonAndTeamTriCode(season, triCode) {
  const query = `
    SELECT
      s.id,
      s.season,
      s.league,
      s.round,
      s.match_datetime,
      s.stadium,
      s.status,
      s.home_team_id,
      th.tri_code AS home_tri_code,
      th.name     AS home_team_name,
      s.away_team_id,
      ta.tri_code AS away_tri_code,
      ta.name     AS away_team_name
    FROM schedule s
    JOIN teams th ON s.home_team_id = th.id
    JOIN teams ta ON s.away_team_id = ta.id
    WHERE s.season = $1
      AND (
        UPPER(th.tri_code) = UPPER($2)
        OR UPPER(ta.tri_code) = UPPER($2)
      )
    ORDER BY s.match_datetime;
  `;

  const values = [season, triCode];
  const { rows } = await pool.query(query, values);
  return rows;
}

// 개별 경기 일정 한 건 조회
async function getScheduleById(id) {
  const query = `
    SELECT
      s.id,
      s.season,
      s.league,
      s.round,
      s.match_datetime,
      s.stadium,
      s.status,
      s.home_team_id,
      th.tri_code AS home_tri_code,
      th.name     AS home_team_name,
      s.away_team_id,
      ta.tri_code AS away_tri_code,
      ta.name     AS away_team_name
    FROM schedule s
    JOIN teams th ON s.home_team_id = th.id
    JOIN teams ta ON s.away_team_id = ta.id
    WHERE s.id = $1
    LIMIT 1;
  `;

  const { rows } = await pool.query(query, [id]);
  return rows[0] || null;
}

module.exports = {
  getScheduleBySeason,
  getScheduleBySeasonAndTeamTriCode,
  getScheduleById,
};

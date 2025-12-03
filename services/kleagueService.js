// services/kleagueService.js
const { pool } = require('../db');

// 팀 목록 가져오기
async function getTeams() {
  const query = `
    SELECT
      id,
      tri_code,
      name,
      city,
      stadium,
      founded_year,
      stadium_capacity
    FROM teams
    ORDER BY id;
  `;

  const { rows } = await pool.query(query);
  return rows;
}

// tri_code로 팀 하나 가져오기
async function getTeamByTriCode(triCode) {
  const query = `
    SELECT
      id,
      tri_code,
      name,
      city,
      stadium,
      founded_year,
      stadium_capacity
    FROM teams
    WHERE UPPER(tri_code) = UPPER($1)
    LIMIT 1;
  `;

  const { rows } = await pool.query(query, [triCode]);
  return rows[0] || null;
}

// team_id + season 으로 선수 목록 가져오기 (예전 방식)
async function getPlayersByTeamInSeasonFromDB(teamId, season) {
  const query = `
    SELECT
      id,
      team_id,
      season,
      league,
      name,
      position,
      birth_date,
      squad_number,
      height_text,
      weight_text
    FROM players
    WHERE team_id = $1
      AND season = $2
    ORDER BY squad_number;
  `;
  const values = [teamId, season];
  const { rows } = await pool.query(query, values);
  return rows;
}

// tri_code + season 으로 선수 목록 가져오기 (지금 사용하는 방식)
async function getPlayersByTeamAndSeasonByTriCode(triCode, season) {
  const query = `
    SELECT
      p.id,
      p.team_id,
      p.season,
      p.league,
      p.name,
      p.position,
      p.birth_date,
      p.squad_number,
      p.height_text,
      p.weight_text
    FROM players p
    JOIN teams t
      ON p.team_id = t.id
    WHERE UPPER(t.tri_code) = UPPER($1)
      AND p.season = $2
    ORDER BY p.squad_number;
  `;

  const values = [triCode, season];
  const { rows } = await pool.query(query, values);
  return rows;
}

// 🔥 playerId로 선수 한 명 가져오기 (2번에서 쓸 것)
async function getPlayerById(playerId) {
  const query = `
    SELECT
      id,
      team_id,
      season,
      league,
      name,
      position,
      birth_date,
      squad_number,
      height_text,
      weight_text
    FROM players
    WHERE id = $1
    LIMIT 1;
  `;

  const { rows } = await pool.query(query, [playerId]);
  return rows[0] || null;
}

module.exports = {
  getTeams,
  getTeamByTriCode,
  getPlayersByTeamInSeasonFromDB,
  getPlayersByTeamAndSeasonByTriCode,
  getPlayerById,
};

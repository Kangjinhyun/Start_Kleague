// kleague/services/dbPlayersService.js

const { pool } = require("../db"); // dbTeamsService.js랑 동일하게

// 전체 선수 조회
async function getAllPlayersFromDB() {
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
      height_text AS height_cm,
      weight_text AS weight_kg
    FROM players
    ORDER BY season DESC, league, team_id, squad_number NULLS LAST, name;
  `;

  const result = await pool.query(query);
  return result.rows;
}

// 특정 시즌 + 리그 + 팀 선수 조회
async function getPlayersByTeamInSeasonFromDB(season, league, teamId) {
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
      height_text AS height_cm,
      weight_text AS weight_kg
    FROM players
    WHERE season = $1
      AND league = $2
      AND team_id = $3
    ORDER BY squad_number NULLS LAST, name;
  `;

  const result = await pool.query(query, [season, league, teamId]);
  return result.rows;
}

module.exports = {
  getAllPlayersFromDB,
  getPlayersByTeamInSeasonFromDB,
};

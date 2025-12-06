// services/matchesService.js
const { pool } = require('../db');

/**
 * 특정 경기(schedule_id)의 상세 정보 조회
 * - 일정 정보 (round, 날짜/시간, 경기장, 상태)
 * - 홈/원정 팀 정보 (id, tri_code, name, city, stadium)
 * - match_stats 가 있으면 스탯까지 함께 반환
 */
async function getMatchDetailByScheduleId(scheduleId) {
  const query = `
    SELECT
      s.id            AS schedule_id,
      s.season,
      s.league,
      s.round,
      s.match_datetime,
      s.stadium       AS match_stadium,
      s.status,

      -- 홈 팀 정보
      ht.id           AS home_team_id,
      ht.tri_code     AS home_tri_code,
      ht.name         AS home_name,
      ht.city         AS home_city,
      ht.stadium      AS home_stadium,

      -- 원정 팀 정보
      at.id           AS away_team_id,
      at.tri_code     AS away_tri_code,
      at.name         AS away_name,
      at.city         AS away_city,
      at.stadium      AS away_stadium,

      -- 경기 스탯 (없으면 NULL)
      ms.id                    AS match_stats_id,
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
      ms.away_red_cards
    FROM schedule s
    JOIN teams ht ON ht.id = s.home_team_id
    JOIN teams at ON at.id = s.away_team_id
    LEFT JOIN match_stats ms ON ms.schedule_id = s.id
    WHERE s.id = $1
    LIMIT 1;
  `;

  const { rows } = await pool.query(query, [scheduleId]);
  const row = rows[0];

  if (!row) return null;

  // 응답을 보기 좋게 구조화
  return {
    scheduleId: row.schedule_id,
    season: row.season,
    league: row.league,
    round: row.round,
    datetime: row.match_datetime,
    stadium: row.match_stadium,
    status: row.status,

    homeTeam: {
      id: row.home_team_id,
      triCode: row.home_tri_code,
      name: row.home_name,
      city: row.home_city,
      stadium: row.home_stadium,
    },

    awayTeam: {
      id: row.away_team_id,
      triCode: row.away_tri_code,
      name: row.away_name,
      city: row.away_city,
      stadium: row.away_stadium,
    },

    stats: row.match_stats_id
      ? {
          id: row.match_stats_id,
          home_score: row.home_score,
          away_score: row.away_score,
          home_shots: row.home_shots,
          away_shots: row.away_shots,
          home_shots_on_target: row.home_shots_on_target,
          away_shots_on_target: row.away_shots_on_target,
          home_possession: row.home_possession,
          away_possession: row.away_possession,
          home_corners: row.home_corners,
          away_corners: row.away_corners,
          home_fouls: row.home_fouls,
          away_fouls: row.away_fouls,
          home_yellow_cards: row.home_yellow_cards,
          away_yellow_cards: row.away_yellow_cards,
          home_red_cards: row.home_red_cards,
          away_red_cards: row.away_red_cards,
        }
      : null,
  };
}

module.exports = {
  getMatchDetailByScheduleId,
};

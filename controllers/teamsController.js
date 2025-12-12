// controllers/teamsController.js
const scheduleService = require('../services/scheduleService');
// (이미 있을 거라고 예상되는 teamsService 등 require는 그대로 두고)

// 팀 목록
async function getTeams(req, res) {
  // ... 기존 로직 유지 ...
}

// 팀별 선수 목록
async function getTeamPlayers(req, res) {
  // ... 기존 로직 유지 ...
}

// 팀별 시즌 경기 일정
// GET /teams/:triCode/matches?season=2025
async function getTeamMatches(req, res) {
  try {
    const { triCode } = req.params;
    const { season } = req.query;

    if (!triCode) {
      return res.status(400).json({
        success: false,
        message: '팀 triCode 파라미터가 필요합니다. 예: /teams/SEO/matches?season=2025',
      });
    }

    const seasonNum = parseInt(season, 10);
    if (!season || Number.isNaN(seasonNum)) {
      return res.status(400).json({
        success: false,
        message:
          'season 쿼리스트링을 숫자로 전달해야 합니다. 예: /teams/SEO/matches?season=2025',
      });
    }

    const rows = await scheduleService.getScheduleBySeasonAndTeamTriCode(
      seasonNum,
      triCode
    );

    return res.json({
      success: true,
      data: {
        triCode: triCode.toUpperCase(),
        season: seasonNum,
        count: rows.length,
        matches: rows.map((m) => ({
          scheduleId: m.id,
          season: m.season,
          league: m.league,
          round: m.round,
          matchNumber: m.match_number,
          datetime: m.match_datetime,
          stadium: m.stadium,
          status: m.status,
          homeTeam: {
            id: m.home_team_id,
            triCode: m.home_tri_code,
            name: m.home_team_name,
          },
          awayTeam: {
            id: m.away_team_id,
            triCode: m.away_tri_code,
            name: m.away_team_name,
          },
          isHome: m.home_tri_code.toUpperCase() === triCode.toUpperCase(),
        })),
      },
    });
  } catch (err) {
    console.error('getTeamMatches error:', err);
    return res.status(500).json({
      success: false,
      message: '팀별 시즌 경기 일정을 가져오는 데 실패했습니다.',
    });
  }
}

module.exports = {
  getTeams,
  getTeamPlayers,
  getTeamMatches, // ✅ 반드시 포함
};

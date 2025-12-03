// controllers/teamsController.js
const kleagueService = require('../services/kleagueService');

// GET /teams
exports.getTeams = async (req, res) => {
  try {
    const teams = await kleagueService.getTeams();
    res.json({ success: true, data: teams });
  } catch (error) {
    console.error('Error in getTeams:', error);
    res.status(500).json({
      success: false,
      message: '팀 목록을 가져오는 데 실패했습니다.',
    });
  }
};

// GET /teams/:triCode/players
// 예: /teams/seo/players
exports.getPlayersByTeam = async (req, res) => {
  try {
    const { triCode } = req.params;
    const season = 2025;

    const players =
      await kleagueService.getPlayersByTeamAndSeasonByTriCode(triCode, season);

    res.json({ success: true, data: players });
  } catch (error) {
    console.error('Error in getPlayersByTeam:', error);
    res.status(500).json({
      success: false,
      message: '선수 목록을 가져오는 데 실패했습니다.',
    });
  }
};

// 🔥 GET /teams/:triCode  (팀 상세)
exports.getTeamDetail = async (req, res) => {
  try {
    const { triCode } = req.params;

    const team = await kleagueService.getTeamByTriCode(triCode);

    if (!team) {
      return res.status(404).json({
        success: false,
        message: '해당 팀을 찾을 수 없습니다.',
      });
    }

    res.json({ success: true, data: team });
  } catch (error) {
    console.error('Error in getTeamDetail:', error);
    res.status(500).json({
      success: false,
      message: '팀 정보를 가져오는 데 실패했습니다.',
    });
  }
};

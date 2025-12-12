// controllers/scheduleController.js
const scheduleService = require('../services/scheduleService');

// 1) 시즌 전체 일정 조회
// GET /schedule/:season
async function getScheduleBySeason(req, res) {
  try {
    const { season } = req.params;
    const seasonNum = parseInt(season, 10);

    if (Number.isNaN(seasonNum)) {
      return res.status(400).json({
        success: false,
        message: 'season 파라미터는 숫자여야 합니다.',
      });
    }

    const rows = await scheduleService.getScheduleBySeason(seasonNum);

    return res.json({
      success: true,
      data: {
        season: seasonNum,
        count: rows.length,
        matches: rows,
      },
    });
  } catch (err) {
    console.error('getScheduleBySeason error:', err);
    return res.status(500).json({
      success: false,
      message: '시즌 일정 조회에 실패했습니다.',
    });
  }
}

// 2) 시즌 + 팀 tri_code 기준 일정 조회
// GET /schedule/:season/team/:triCode
async function getScheduleBySeasonAndTeam(req, res) {
  try {
    const { season, triCode } = req.params;
    const seasonNum = parseInt(season, 10);

    if (Number.isNaN(seasonNum)) {
      return res.status(400).json({
        success: false,
        message: 'season 파라미터는 숫자여야 합니다.',
      });
    }

    if (!triCode) {
      return res.status(400).json({
        success: false,
        message: 'triCode 파라미터가 필요합니다.',
      });
    }

    const rows = await scheduleService.getScheduleBySeasonAndTeamTriCode(
      seasonNum,
      triCode
    );

    return res.json({
      success: true,
      data: {
        season: seasonNum,
        triCode,
        count: rows.length,
        matches: rows,
      },
    });
  } catch (err) {
    console.error('getScheduleBySeasonAndTeam error:', err);
    return res.status(500).json({
      success: false,
      message: '팀별 시즌 일정 조회에 실패했습니다.',
    });
  }
}

// 3) 개별 경기 일정 한 건 조회
// GET /schedule/match/:scheduleId
async function getScheduleById(req, res) {
  try {
    const { scheduleId } = req.params;
    const idNum = Number(scheduleId);

    if (Number.isNaN(idNum)) {
      return res.status(400).json({
        success: false,
        message: 'scheduleId는 숫자여야 합니다.',
      });
    }

    const match = await scheduleService.getScheduleById(idNum);

    if (!match) {
      return res.status(404).json({
        success: false,
        message: '해당 경기 일정을 찾을 수 없습니다.',
      });
    }

    return res.json({
      success: true,
      data: match,
    });
  } catch (err) {
    console.error('getScheduleById error:', err);
    return res.status(500).json({
      success: false,
      message: '경기 일정 조회에 실패했습니다.',
    });
  }
}

// 4) 시즌 + 라운드 기준 일정 조회 (라운드별 경기 목록)
// GET /schedule/round/:round?season=2025
async function getScheduleByRound(req, res) {
  try {
    const { round } = req.params;
    const { season } = req.query;

    const roundNum = parseInt(round, 10);
    const seasonNum = parseInt(season, 10);

    if (Number.isNaN(roundNum)) {
      return res.status(400).json({
        success: false,
        message: 'round 파라미터는 숫자여야 합니다.',
      });
    }

    if (!season || Number.isNaN(seasonNum)) {
      return res.status(400).json({
        success: false,
        message:
          'season 쿼리스트링을 숫자로 전달해야 합니다. 예: /schedule/round/1?season=2025',
      });
    }

    const rows = await scheduleService.getScheduleBySeasonAndRound(
      seasonNum,
      roundNum
    );

    return res.json({
      success: true,
      data: {
        season: seasonNum,
        round: roundNum,
        count: rows.length,
        matches: rows,
      },
    });
  } catch (err) {
    console.error('getScheduleByRound error:', err);
    return res.status(500).json({
      success: false,
      message: '라운드별 경기 목록을 가져오는 데 실패했습니다.',
    });
  }
}

module.exports = {
  getScheduleBySeason,
  getScheduleBySeasonAndTeam,
  getScheduleById,
  getScheduleByRound, // ✅ 이게 있어야 routes에서 undefined가 안 뜸
};

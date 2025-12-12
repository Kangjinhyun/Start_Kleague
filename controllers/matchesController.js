// controllers/matchesController.js
const scheduleService = require('../services/scheduleService');
const matchStatsService = require('../services/matchStatsService');

// 1) 경기 상세 조회
// GET /matches/:scheduleId
async function getMatchDetail(req, res) {
  try {
    const { scheduleId } = req.params;
    const idNum = Number(scheduleId);

    if (Number.isNaN(idNum)) {
      return res.status(400).json({
        success: false,
        message: 'scheduleId는 숫자여야 합니다.',
      });
    }

    // 일정 정보
    const schedule = await scheduleService.getScheduleById(idNum);
    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: '경기 일정을 찾을 수 없습니다.',
      });
    }

    // 스탯 정보
    const stats = await matchStatsService.getMatchStats(idNum);

    return res.json({
      success: true,
      data: {
        scheduleId: schedule.id,
        season: schedule.season,
        league: schedule.league,
        round: schedule.round,
        matchNumber: schedule.match_number,
        datetime: schedule.match_datetime,
        stadium: schedule.stadium,
        status: schedule.status,
        homeTeam: {
          id: schedule.home_team_id,
          triCode: schedule.home_tri_code,
          name: schedule.home_team_name,
        },
        awayTeam: {
          id: schedule.away_team_id,
          triCode: schedule.away_tri_code,
          name: schedule.away_team_name,
        },
        stats: stats || null,
      },
    });
  } catch (err) {
    console.error('getMatchDetail error:', err);
    return res.status(500).json({
      success: false,
      message: '경기 상세 정보를 가져오는 데 실패했습니다.',
    });
  }
}

// 2) 경기 스탯 조회
// GET /matches/:scheduleId/stats
async function getMatchStats(req, res) {
  try {
    const { scheduleId } = req.params;
    const idNum = Number(scheduleId);

    if (Number.isNaN(idNum)) {
      return res.status(400).json({
        success: false,
        message: 'scheduleId는 숫자여야 합니다.',
      });
    }

    const stats = await matchStatsService.getMatchStats(idNum);

    if (!stats) {
      return res.status(404).json({
        success: false,
        message: '해당 경기의 스탯이 존재하지 않습니다.',
      });
    }

    return res.json({
      success: true,
      data: stats,
    });
  } catch (err) {
    console.error('getMatchStats error:', err);
    return res.status(500).json({
      success: false,
      message: '경기 스탯 조회에 실패했습니다.',
    });
  }
}

// 3) 경기 스탯 입력/수정
// PUT /matches/:scheduleId/stats
async function upsertMatchStats(req, res) {
  try {
    const { scheduleId } = req.params;
    const idNum = Number(scheduleId);

    if (Number.isNaN(idNum)) {
      return res.status(400).json({
        success: false,
        message: 'scheduleId는 숫자여야 합니다.',
      });
    }

    const {
      homeScore,
      awayScore,
      homeShots,
      awayShots,
      homeShotsOnTarget,
      awayShotsOnTarget,
      homePossession,
      awayPossession,
    } = req.body;

    const stats = await matchStatsService.upsertMatchStats(idNum, {
      homeScore,
      awayScore,
      homeShots,
      awayShots,
      homeShotsOnTarget,
      awayShotsOnTarget,
      homePossession,
      awayPossession,
    });

    return res.json({
      success: true,
      data: stats,
    });
  } catch (err) {
    console.error('upsertMatchStats error:', err);
    return res.status(500).json({
      success: false,
      message: '경기 스탯 저장에 실패했습니다.',
    });
  }
}

module.exports = {
  getMatchDetail,
  getMatchStats,
  upsertMatchStats, // ✅ 세 개 모두 확실히 export
};

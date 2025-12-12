// controllers/matchStatsController.js
const matchStatsService = require('../services/matchStatsService');

// 경기 스탯 조회 (선택사항: 이미 GET /matches/:scheduleId/stats 가 있으면 거기서 이걸 써도 됨)
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

// 경기 스탯 입력/수정
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

    // 필요하다면 여기서 타입/범위 검증 추가 가능

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
  getMatchStats,
  upsertMatchStats,
};

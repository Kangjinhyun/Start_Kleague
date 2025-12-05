// controllers/matchStatsController.js
const matchStatsService = require('../services/matchStatsService');

// GET /matches/:scheduleId/stats
exports.getMatchStatsByScheduleId = async (req, res) => {
  try {
    const { scheduleId } = req.params;

    const stats = await matchStatsService.getMatchStatsByScheduleId(scheduleId);

    if (!stats) {
      return res.status(404).json({
        success: false,
        message: '해당 경기의 스탯을 찾을 수 없습니다.',
      });
    }

    res.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error('Error in getMatchStatsByScheduleId:', error);
    res.status(500).json({
      success: false,
      message: '경기 스탯 정보를 가져오는 데 실패했습니다.',
    });
  }
};

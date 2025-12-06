// controllers/matchesController.js
const matchesService = require('../services/matchesService');

// GET /matches/:scheduleId
exports.getMatchDetail = async (req, res) => {
  try {
    const { scheduleId } = req.params;

    const matchDetail = await matchesService.getMatchDetailByScheduleId(scheduleId);

    if (!matchDetail) {
      return res.status(404).json({
        success: false,
        message: '경기 정보를 찾을 수 없습니다.',
      });
    }

    res.json({
      success: true,
      data: matchDetail,
    });
  } catch (error) {
    console.error('Error in getMatchDetail:', error);
    res.status(500).json({
      success: false,
      message: '경기 정보를 가져오는 데 실패했습니다.',
    });
  }
};

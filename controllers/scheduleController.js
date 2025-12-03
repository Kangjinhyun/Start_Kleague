// controllers/scheduleController.js
const scheduleService = require('../services/scheduleService');

// GET /schedule
exports.getSchedule = (req, res) => {
  try {
    const schedule = scheduleService.getAllSchedule();
    res.json({ success: true, data: schedule });
  } catch (error) {
    console.error('Error in getSchedule:', error);
    res.status(500).json({
      success: false,
      message: '일정 정보를 가져오는 데 실패했습니다.',
    });
  }
};

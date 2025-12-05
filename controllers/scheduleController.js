// controllers/scheduleController.js
const scheduleService = require('../services/scheduleService');

// GET /schedule
// 예: /schedule
// 예: /schedule?season=2025
// 예: /schedule?season=2025&team=seo
exports.getSchedule = async (req, res) => {
  try {
    const season = req.query.season ? Number(req.query.season) : 2025;
    const teamTriCode = req.query.team; // 예: seo, poh 등

    let schedule;

    if (teamTriCode) {
      schedule = await scheduleService.getScheduleBySeasonAndTeamTriCode(
        season,
        teamTriCode
      );
    } else {
      schedule = await scheduleService.getScheduleBySeason(season);
    }

    res.json({
      success: true,
      data: schedule,
    });
  } catch (error) {
    console.error('Error in getSchedule:', error);
    res.status(500).json({
      success: false,
      message: '일정 정보를 가져오는 데 실패했습니다.',
    });
  }
};

// GET /schedule/:id
exports.getScheduleById = async (req, res) => {
  try {
    const { id } = req.params;

    const match = await scheduleService.getScheduleById(id);

    if (!match) {
      return res.status(404).json({
        success: false,
        message: '해당 일정을 찾을 수 없습니다.',
      });
    }

    res.json({
      success: true,
      data: match,
    });
  } catch (error) {
    console.error('Error in getScheduleById:', error);
    res.status(500).json({
      success: false,
      message: '일정 정보를 가져오는 데 실패했습니다.',
    });
  }
};

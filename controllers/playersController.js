// controllers/playersController.js
const kleagueService = require('../services/kleagueService');

exports.healthCheck = (req, res) => {
  res.json({
    success: true,
    message: 'players controller is ready',
  });
};

// 🔥 GET /players/:playerId
exports.getPlayerById = async (req, res) => {
  try {
    const { playerId } = req.params;

    const player = await kleagueService.getPlayerById(playerId);

    if (!player) {
      return res.status(404).json({
        success: false,
        message: '해당 선수를 찾을 수 없습니다.',
      });
    }

    res.json({ success: true, data: player });
  } catch (error) {
    console.error('Error in getPlayerById:', error);
    res.status(500).json({
      success: false,
      message: '선수 정보를 가져오는 데 실패했습니다.',
    });
  }
};

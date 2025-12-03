// services/scheduleService.js
// data/schedule.js 가 module.exports = [...] 형태라고 가정
const scheduleData = require('../data/schedule');

function getAllSchedule() {
  // 나중에 여기서 시즌/팀 필터링 로직 추가 가능
  return scheduleData;
}

module.exports = {
  getAllSchedule,
};

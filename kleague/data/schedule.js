// data/schedule.js

const { TEAM_IDS } = require("./teams");

// schedule[year][division] = [ { ...경기 정보 }, ... ]
const schedule = {
  2025: {
    K1: [
      {
        matchId: 1,                  // 🔹 id 대신 matchId 로 명확히
        round: 1,
        isSplitRound: false,
        date: "2025-02-15",
        time: "13:00",
        homeTeamId: TEAM_IDS.POHANG,
        awayTeamId: TEAM_IDS.DAEJEON,
        stadium: "포항스틸야드"
      },
      {
        matchId: 2,
        round: 1,
        isSplitRound: false,
        date: "2025-02-15",
        time: "16:30",
        homeTeamId: TEAM_IDS.SEOUL,
        awayTeamId: TEAM_IDS.GWANGJU,
        stadium: "서울월드컵경기장"
      },
      {
        matchId: 3,
        round: 34,
        isSplitRound: true,
        date: "2025-10-25",
        time: "14:00",
        homeTeamId: TEAM_IDS.JEONBUK,
        awayTeamId: TEAM_IDS.ULSAN,
        stadium: "전주월드컵경기장"
      }
      // 👉 나머지 경기도 이 형식으로 계속 추가하면 됨
    ]
  }
};

module.exports = {
  schedule
};

// data/matchStats.js

// matchStats[matchId] = { ...경기 결과 및 스탯... }

const matchStats = {
  1: {
    matchId: 1,
    homeScore: 2,
    awayScore: 1,
    status: "FINISHED", // 예정: SCHEDULED, FINISHED, POSTPONED 등
    goals: [
      // 예시 데이터
      { minute: 10, team: "HOME", playerName: "홍길동", type: "GOAL" },
      { minute: 55, team: "AWAY", playerName: "김서울", type: "GOAL" },
      { minute: 78, team: "HOME", playerName: "홍길동", type: "GOAL" }
    ],
    cards: [
      { minute: 30, team: "HOME", playerName: "박수비", type: "YELLOW" }
    ]
  },
  2: {
    matchId: 2,
    homeScore: 0,
    awayScore: 0,
    status: "SCHEDULED",
    goals: [],
    cards: []
  }
  // 👉 앞으로 matchId 기준으로 계속 추가
};

module.exports = {
  matchStats
};

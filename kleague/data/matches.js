// data/matches.js

const { TEAM_IDS } = require("./teams");

// matches[year][division] = [ { ...경기정보 }, ... ]
const matches = {
  2025: {
    K1: [
      // ======================
      // 정규 라운드 예시
      // ======================
      {
        id: 1,
        round: 1,
        isSplitRound: false,              // 🔹 정규 라운드
        date: "2025-02-15",
        time: "13:00",
        homeTeamId: TEAM_IDS.POHANG,
        awayTeamId: TEAM_IDS.DAEJEON,
        stadium: "포항스틸야드"
      },
      {
        id: 2,
        round: 1,
        isSplitRound: false,
        date: "2025-02-15",
        time: "16:30",
        homeTeamId: TEAM_IDS.SEOUL,
        awayTeamId: TEAM_IDS.GWANGJU,
        stadium: "서울월드컵경기장"
      },
      // … 이 패턴 그대로 33라운드까지 쭉 채워 넣기 …

      // ======================
      // 스플릿 라운드 예시 (34R~)
      // ======================
      {
        id: 199,
        round: 34,
        isSplitRound: true,               // 🔹 스플릿 라운드 표시
        splitGroup: "A",                  // "A" or "B" (선택 필드)
        date: "2025-10-25",
        time: "14:00",
        homeTeamId: TEAM_IDS.JEONBUK,
        awayTeamId: TEAM_IDS.ULSAN,
        stadium: "전주월드컵경기장"
      },
      {
        id: 200,
        round: 34,
        isSplitRound: true,
        splitGroup: "B",
        date: "2025-10-25",
        time: "16:30",
        homeTeamId: TEAM_IDS.GANGWON,
        awayTeamId: TEAM_IDS.DAEGU,
        stadium: "춘천송암스포츠타운"
      }
      // … 38라운드까지 같은 방식으로 추가 …
    ]
  }
};

module.exports = {
  matches
};

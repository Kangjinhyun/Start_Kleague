// index.js

const {
  TEAM_IDS,
  teams,
  getTeamsBySeason,
  getTeamByTriCode,
  getPlayersByTeamInSeason,
  formatPlayerCode,
  getScheduleBySeason,
  getScheduleByRound,
  getScheduleByTeamInSeason,
  getMatchStatsById,
  getRoundLabel
} = require("./services/kleagueService");

const { getAllTeamsFromDB } = require("./services/dbTeamsService");

// 1) 2025년 K리그1 팀 목록 출력
const teams2025K1 = getTeamsBySeason(2025, "K1");

console.log("🏆 2025년 K리그1 참가 팀 수:", teams2025K1.length);
console.log("📋 2025년 K리그1 팀 목록:");
teams2025K1.forEach((team, index) => {
  console.log(
    `${index + 1}. [${team.triCode}] ${team.name} | 연고지: ${team.city} | ` +
      `홈구장: ${team.stadium} | 창단: ${team.foundedYear}년 | 수용인원: ${team.stadiumCapacity} (id: ${team.id})`
  );
});

// 2) triCode로 팀 조회 테스트
console.log("\n🔍 triCode로 팀 조회 테스트");
console.log("SEO →", getTeamByTriCode("SEO"));
console.log("uls →", getTeamByTriCode("uls"));

// 3) 2025년 K리그1 FC서울 / 울산 스쿼드 조회
const seoulPlayers2025 = getPlayersByTeamInSeason(2025, "K1", TEAM_IDS.SEOUL);
const ulsanPlayers2025 = getPlayersByTeamInSeason(2025, "K1", TEAM_IDS.ULSAN);

console.log("\n👥 2025년 K리그1 FC서울 스쿼드:");
seoulPlayers2025.forEach((player, index) => {
  console.log(
    `${index + 1}. [${formatPlayerCode(player.id)}] ${player.name} | 포지션: ${
      player.position
    } | 생년월일: ${player.birthDate}`
  );
});

console.log("\n👥 2025년 K리그1 울산 HD 스쿼드:");
ulsanPlayers2025.forEach((player, index) => {
  console.log(
    `${index + 1}. [${formatPlayerCode(player.id)}] ${player.name} | 포지션: ${
      player.position
    } | 생년월일: ${player.birthDate}`
  );
});

// 4) 2025년 K리그1 1라운드 일정 출력
const round1Matches = getScheduleByRound(2025, "K1", 1);

console.log("\n📅 2025년 K리그1 1라운드 일정:");
round1Matches.forEach((match) => {
  const home = teams[match.homeTeamId];
  const away = teams[match.awayTeamId];
  const roundLabel = getRoundLabel(match);

  const stats = getMatchStatsById(match.matchId);
  const scoreText = stats
    ? ` | 스코어: ${stats.homeScore} - ${stats.awayScore}`
    : "";

  console.log(
    `${roundLabel} | ${match.date} ${match.time} | ${home.name} vs ${away.name} (${match.stadium})${scoreText}`
  );
});

// 5) 2025년 K리그1 FC서울 시즌 일정
const seoulSchedule2025 = getScheduleByTeamInSeason(
  2025,
  "K1",
  TEAM_IDS.SEOUL
);

console.log("\n🗓 2025년 K리그1 FC서울 시즌 일정:");
seoulSchedule2025.forEach((match) => {
  const home = teams[match.homeTeamId];
  const away = teams[match.awayTeamId];
  const roundLabel = getRoundLabel(match);

  const stats = getMatchStatsById(match.matchId);
  const scoreText = stats
    ? ` | 스코어: ${stats.homeScore} - ${stats.awayScore}`
    : "";

  console.log(
    `${roundLabel} | ${match.date} ${match.time} | ${home.name} vs ${away.name} (${match.stadium})${scoreText}`
  );
});

// 6) 2025년 K리그1 스플릿 라운드 경기 목록
const allMatches2025K1 = getScheduleBySeason(2025, "K1");
const splitMatches2025K1 = allMatches2025K1.filter(
  (match) => match.isSplitRound
);

console.log("\n🔀 2025년 K리그1 스플릿 라운드 경기 목록:");
splitMatches2025K1.forEach((match) => {
  const home = teams[match.homeTeamId];
  const away = teams[match.awayTeamId];
  const roundLabel = getRoundLabel(match);

  console.log(
    `${roundLabel} | ${match.date} ${match.time} | ${home.name} vs ${away.name} (${match.stadium})`
  );
});

const { getAllTeamsFromDB } = require("./services/dbTeamsService");

(async () => {
  const teams = await getAllTeamsFromDB();
  console.log("\n📡 DB에서 읽은 팀 목록:");
  console.log(teams);
})();


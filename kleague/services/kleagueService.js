// services/kleague.js

const { TEAM_IDS, teams } = require("../data/teams");
const { seasons } = require("../data/seasons");
const { PLAYER_IDS, players, formatPlayerCode } = require("../data/players");
const { squads } = require("../data/squads");
const { schedule } = require("../data/schedule");    // ✅ 일정용
const { matchStats } = require("../data/matchStats"); // ✅ 경기 결과/스탯용

// 시즌별 팀 목록 조회
function getTeamsBySeason(year, division) {
  const season = seasons[year];

  if (!season) {
    console.log(`해당 연도(${year}) 시즌 데이터가 없습니다.`);
    return [];
  }

  const teamIds = season[division];

  if (!teamIds) {
    console.log(`해당 디비전(${division}) 데이터가 없습니다.`);
    return [];
  }

  return teamIds.map((id) => teams[id]);
}

// triCode로 팀 찾기
function getTeamByTriCode(triCode) {
  const upper = triCode.toUpperCase();
  const allTeams = Object.values(teams);
  const found = allTeams.find((team) => team.triCode === upper);
  return found || null;
}

// 시즌 + 팀 기준 선수 목록 조회
function getPlayersByTeamInSeason(year, division, teamId) {
  const seasonSquads = squads[year];
  if (!seasonSquads) {
    console.log(`해당 연도(${year})의 스쿼드 데이터가 없습니다.`);
    return [];
  }

  const divisionSquads = seasonSquads[division];
  if (!divisionSquads) {
    console.log(`해당 디비전(${division})의 스쿼드 데이터가 없습니다.`);
    return [];
  }

  const playerIds = divisionSquads[teamId];
  if (!playerIds) {
    console.log(`해당 팀(id=${teamId})의 스쿼드 데이터가 없습니다.`);
    return [];
  }

  return playerIds.map((pid) => players[pid]);
}
// 시즌 + 디비전 기준 전체 일정 조회
function getScheduleBySeason(year, division) {
  const seasonSchedule = schedule[year];
  if (!seasonSchedule) {
    console.log(`해당 연도(${year})의 일정 데이터가 없습니다.`);
    return [];
  }

  const list = seasonSchedule[division];
  if (!list) {
    console.log(`해당 디비전(${division})의 일정 데이터가 없습니다.`);
    return [];
  }

  return list;
}

function getScheduleByRound(year, division, round) {
  return getScheduleBySeason(year, division).filter(
    (match) => match.round === round
  );
}

function getScheduleByTeamInSeason(year, division, teamId) {
  return getScheduleBySeason(year, division).filter(
    (match) =>
      match.homeTeamId === teamId || match.awayTeamId === teamId
  );
}

// 특정 라운드 일정만 필터링
function getMatchesByRound(year, division, round) {
  return getMatchesBySeason(year, division).filter(
    (match) => match.round === round
  );
}

// 특정 팀의 시즌 전체 일정
function getMatchesByTeamInSeason(year, division, teamId) {
  return getMatchesBySeason(year, division).filter(
    (match) =>
      match.homeTeamId === teamId || match.awayTeamId === teamId
  );
}

function getRoundLabel(match) {
  if (match.isSplitRound) {
    // 🔹 스플릿 라운드는 '스플릿' 텍스트 추가
    return `스플릿 ${match.round}R`;
  }
  return `${match.round}R`;
}

function getMatchStatsById(matchId) {
  return matchStats[matchId] || null;
}


module.exports = {
  TEAM_IDS,
  teams,
  seasons,
  PLAYER_IDS,
  players,
  squads,
  formatPlayerCode,
  getTeamsBySeason,
  getTeamByTriCode,
  getPlayersByTeamInSeason,
  getScheduleBySeason,
  getScheduleByRound,
  getScheduleByTeamInSeason,
  getMatchStatsById,
  getRoundLabel
};

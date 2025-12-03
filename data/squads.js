// data/squads.js

const { TEAM_IDS } = require("./teams");
const { PLAYER_IDS } = require("./players");

// squads[year][division][teamId] = [playerId, playerId, ...]
const squads = {
  2025: {
    K1: {
      [TEAM_IDS.SEOUL]: [
        PLAYER_IDS.HONG_GILDONG,
        PLAYER_IDS.KIM_SEOUL,
        PLAYER_IDS.PARK_SUBI
      ],
      [TEAM_IDS.ULSAN]: [
        PLAYER_IDS.LEE_ULSAN,
        PLAYER_IDS.JUNG_JUNGWON
      ]
      // 나중에 다른 팀들도 추가 가능
    }
  }
};

module.exports = {
  squads
};

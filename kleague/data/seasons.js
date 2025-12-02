// data/seasons.js

const { TEAM_IDS } = require("./teams");

// seasons[year][division] = [teamId, teamId, ...]
const seasons = {
  2025: {
    K1: [
      TEAM_IDS.JEONBUK,
      TEAM_IDS.DAEJEON,
      TEAM_IDS.GIMCHEON,
      TEAM_IDS.POHANG,
      TEAM_IDS.SEOUL,
      TEAM_IDS.GANGWON,
      TEAM_IDS.GWANGJU,
      TEAM_IDS.ANYANG,
      TEAM_IDS.ULSAN,
      TEAM_IDS.SUWONFC,
      TEAM_IDS.JEJU,
      TEAM_IDS.DAEGU
    ]
  }
};

module.exports = {
  seasons
};

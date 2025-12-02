// data/players.js

// 선수 고유 ID (팀과 무관, 평생 고정)
const PLAYER_IDS = {
  HONG_GILDONG: 1,
  KIM_SEOUL: 2,
  PARK_SUBI: 3,
  LEE_ULSAN: 4,
  JUNG_JUNGWON: 5
};

// 플레이어 ID를 "P00000000001" 형태로 포맷
function formatPlayerCode(id) {
  return "P" + String(id).padStart(11, "0");
}

// 선수 기본 정보
const players = {
  [PLAYER_IDS.HONG_GILDONG]: {
    id: PLAYER_IDS.HONG_GILDONG,
    name: "홍길동",
    birthDate: "1998-01-15",
    position: "FW",
    foot: "right",
    nationality: "KOR"
  },
  [PLAYER_IDS.KIM_SEOUL]: {
    id: PLAYER_IDS.KIM_SEOUL,
    name: "김서울",
    birthDate: "1995-06-03",
    position: "MF",
    foot: "right",
    nationality: "KOR"
  },
  [PLAYER_IDS.PARK_SUBI]: {
    id: PLAYER_IDS.PARK_SUBI,
    name: "박수비",
    birthDate: "1993-11-20",
    position: "DF",
    foot: "left",
    nationality: "KOR"
  },
  [PLAYER_IDS.LEE_ULSAN]: {
    id: PLAYER_IDS.LEE_ULSAN,
    name: "이울산",
    birthDate: "1997-03-10",
    position: "FW",
    foot: "right",
    nationality: "KOR"
  },
  [PLAYER_IDS.JUNG_JUNGWON]: {
    id: PLAYER_IDS.JUNG_JUNGWON,
    name: "정중원",
    birthDate: "1994-09-09",
    position: "MF",
    foot: "left",
    nationality: "KOR"
  }
};

module.exports = {
  PLAYER_IDS,
  players,
  formatPlayerCode
};

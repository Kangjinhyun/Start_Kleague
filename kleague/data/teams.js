// data/teams.js

// 팀 고유 ID 정의
const TEAM_IDS = {
  JEONBUK: 1001,
  DAEJEON: 1002,
  GIMCHEON: 1003,
  POHANG: 1004,
  SEOUL: 1005,
  GANGWON: 1006,
  GWANGJU: 1007,
  ANYANG: 1008,
  ULSAN: 1009,
  SUWONFC: 1010,
  JEJU: 1011,
  DAEGU: 1012
};

// 팀 기본 정보
const teams = {
  [TEAM_IDS.JEONBUK]: {
    id: TEAM_IDS.JEONBUK,
    triCode: "JHM",
    name: "전북 현대 모터스",
    city: "전주(전북)",
    stadium: "전주월드컵경기장",
    foundedYear: 1994,
    stadiumCapacity: "38,000석"
  },
  [TEAM_IDS.DAEJEON]: {
    id: TEAM_IDS.DAEJEON,
    triCode: "DHC",
    name: "대전 하나 시티즌",
    city: "대전",
    stadium: "대전월드컵경기장",
    foundedYear: 1997,
    stadiumCapacity: "40,000석"
  },
  [TEAM_IDS.GIMCHEON]: {
    id: TEAM_IDS.GIMCHEON,
    triCode: "GIM",
    name: "김천 상무",
    city: "김천",
    stadium: "김천종합운동장",
    foundedYear: 1984,
    stadiumCapacity: "25,000석"
  },
  [TEAM_IDS.POHANG]: {
    id: TEAM_IDS.POHANG,
    triCode: "POH",
    name: "포항 스틸러스",
    city: "포항",
    stadium: "포항스틸야드",
    foundedYear: 1973,
    stadiumCapacity: "17,000석"
  },
  [TEAM_IDS.SEOUL]: {
    id: TEAM_IDS.SEOUL,
    triCode: "SEO",
    name: "FC 서울",
    city: "서울",
    stadium: "서울월드컵경기장",
    foundedYear: 1983,
    stadiumCapacity: "66,000석"
  },
  [TEAM_IDS.GANGWON]: {
    id: TEAM_IDS.GANGWON,
    triCode: "GAN",
    name: "강원 FC",
    city: "강원",
    stadium: "춘천송암스포츠타운 / 강릉종합운동장",
    foundedYear: 2008,
    stadiumCapacity: "춘천: 20,000석 / 강릉: 22,000석"
  },
  [TEAM_IDS.GWANGJU]: {
    id: TEAM_IDS.GWANGJU,
    triCode: "GJU",
    name: "광주 FC",
    city: "광주",
    stadium: "광주월드컵경기장",
    foundedYear: 2010,
    stadiumCapacity: "40,000석"
  },
  [TEAM_IDS.ANYANG]: {
    id: TEAM_IDS.ANYANG,
    triCode: "ANY",
    name: "FC 안양",
    city: "안양",
    stadium: "안양종합운동장",
    foundedYear: 2013,
    stadiumCapacity: "18,000석"
  },
  [TEAM_IDS.ULSAN]: {
    id: TEAM_IDS.ULSAN,
    triCode: "ULS",
    name: "울산 HD",
    city: "울산",
    stadium: "울산문수축구경기장",
    foundedYear: 1983,
    stadiumCapacity: "44,000석"
  },
  [TEAM_IDS.SUWONFC]: {
    id: TEAM_IDS.SUWONFC,
    triCode: "SFC",
    name: "수원 FC",
    city: "수원",
    stadium: "수원종합운동장",
    foundedYear: 2003,
    stadiumCapacity: "11,000석"
  },
  [TEAM_IDS.JEJU]: {
    id: TEAM_IDS.JEJU,
    triCode: "JEJ",
    name: "제주 SK",
    city: "제주",
    stadium: "제주월드컵경기장",
    foundedYear: 1982,
    stadiumCapacity: "29,000석"
  },
  [TEAM_IDS.DAEGU]: {
    id: TEAM_IDS.DAEGU,
    triCode: "DGU",
    name: "대구 FC",
    city: "대구",
    stadium: "DGB대구은행파크",
    foundedYear: 2002,
    stadiumCapacity: "12,000석"
  }
};

module.exports = {
  TEAM_IDS,
  teams
};

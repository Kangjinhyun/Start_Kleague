// ===========================
// 0. 팀 ID 상수 (숫자 기반 고유 ID)
// ===========================
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

// ===========================
// 1. 팀 기본 정보 (숫자 ID + triCode + 한글명 등)
// ===========================
const teams = {
  [TEAM_IDS.JEONBUK]: {
    id: TEAM_IDS.JEONBUK,
    triCode: "JHM", // Jeonbuk Hyundai Motors
    name: "전북 현대 모터스",
    city: "전주(전북)",
    stadium: "전주월드컵경기장"
  },
  [TEAM_IDS.DAEJEON]: {
    id: TEAM_IDS.DAEJEON,
    triCode: "DHC", // Daejeon Hana Citizen
    name: "대전 하나 시티즌",
    city: "대전",
    stadium: "대전월드컵경기장"
  },
  [TEAM_IDS.GIMCHEON]: {
    id: TEAM_IDS.GIMCHEON,
    triCode: "GIM", // Gimcheon Sangmu
    name: "김천 상무",
    city: "김천",
    stadium: "김천종합운동장"
  },
  [TEAM_IDS.POHANG]: {
    id: TEAM_IDS.POHANG,
    triCode: "POH", // Pohang Steelers
    name: "포항 스틸러스",
    city: "포항",
    stadium: "포항스틸야드"
  },
  [TEAM_IDS.SEOUL]: {
    id: TEAM_IDS.SEOUL,
    triCode: "SEO", // FC Seoul
    name: "FC 서울",
    city: "서울",
    stadium: "서울월드컵경기장"
  },
  [TEAM_IDS.GANGWON]: {
    id: TEAM_IDS.GANGWON,
    triCode: "GAN", // Gangwon FC
    name: "강원 FC",
    city: "강원",
    stadium: "춘천송암스포츠타운 / 강릉종합운동장"
  },
  [TEAM_IDS.GWANGJU]: {
    id: TEAM_IDS.GWANGJU,
    triCode: "GJU", // Gwangju FC
    name: "광주 FC",
    city: "광주",
    stadium: "광주월드컵경기장"
  },
  [TEAM_IDS.ANYANG]: {
    id: TEAM_IDS.ANYANG,
    triCode: "ANY", // FC Anyang
    name: "FC 안양",
    city: "안양",
    stadium: "안양종합운동장"
  },
  [TEAM_IDS.ULSAN]: {
    id: TEAM_IDS.ULSAN,
    triCode: "ULS", // Ulsan HD
    name: "울산 HD",
    city: "울산",
    stadium: "울산문수축구경기장"
  },
  [TEAM_IDS.SUWONFC]: {
    id: TEAM_IDS.SUWONFC,
    triCode: "SFC", // Suwon FC
    name: "수원 FC",
    city: "수원",
    stadium: "수원종합운동장"
  },
  [TEAM_IDS.JEJU]: {
    id: TEAM_IDS.JEJU,
    triCode: "JEJ", // Jeju SK
    name: "제주 SK",
    city: "제주",
    stadium: "제주월드컵경기장"
  },
  [TEAM_IDS.DAEGU]: {
    id: TEAM_IDS.DAEGU,
    triCode: "DGU", // Daegu FC
    name: "대구 FC",
    city: "대구",
    stadium: "DGB대구은행파크"
  }
};

// ===========================
// 2. 시즌 중심 구조 (season-first)
// ===========================
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

// ===========================
// 3. 시즌별 팀 목록 조회 함수
// ===========================
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

  const result = teamIds.map((id) => teams[id]);

  return result;
}

// ===========================
// 4. 테스트: 2025년 K리그1 팀 목록 출력
// ===========================
const teams2025K1 = getTeamsBySeason(2025, "K1");

console.log("🏆 2025년 K리그1 참가 팀 수:", teams2025K1.length);
console.log("📋 2025년 K리그1 팀 목록:");

teams2025K1.forEach((team, index) => {
  console.log(
    `${index + 1}. [${team.triCode}] ${team.name} | 연고지: ${team.city} | 홈구장: ${
      team.stadium
    } (id: ${team.id})`
  );
});

// ===========================
// 5. triCode로 팀 하나 찾기
// ===========================
function getTeamByTriCode(triCode) {
  const upper = triCode.toUpperCase(); // 소문자 입력도 허용

  const allTeams = Object.values(teams);
  const found = allTeams.find((team) => team.triCode === upper);

  return found || null;
}

// 테스트: triCode로 팀 찾기
const seoul = getTeamByTriCode("SEO");
const ulsan = getTeamByTriCode("uls"); // 소문자 테스트

console.log("\n🔍 triCode로 팀 조회 테스트");
console.log("SEO →", seoul);
console.log("uls →", ulsan);

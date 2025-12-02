// db.js
require("dotenv").config();
const { Pool } = require("pg");

// 환경변수에서 DB URL 읽기
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL이 설정되어 있지 않습니다. .env 파일을 확인하세요.");
}

// Supabase 같은 클라우드 PostgreSQL은 SSL을 요구하는 경우가 많음
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  pool
};


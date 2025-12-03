// db.js
const { Pool } = require('pg');
require('dotenv').config();

// Supabase / PostgreSQL 공용 설정
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,             // SSL 반드시 사용
    rejectUnauthorized: false, // Supabase에서 보통 이렇게 둠
  },
});

module.exports = { pool };

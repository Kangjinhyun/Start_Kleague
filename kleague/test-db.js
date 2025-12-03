// test-db.js
const { pool } = require("./db");

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW() AS now");
    console.log("✅ DB 연결 성공! 서버 시간이:", result.rows[0].now);
  } catch (err) {
    console.error("❌ DB 연결 실패:", err.message);
    console.error(err);
  } finally {
    await pool.end();
  }
}

testConnection();


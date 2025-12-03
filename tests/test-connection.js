// tests/test-connection.js
const { pool } = require('../db');

async function main() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ DB 연결 성공:', result.rows[0]);
  } catch (err) {
    console.error('❌ DB 연결 실패:', err);
  } finally {
    process.exit();
  }
}

main();

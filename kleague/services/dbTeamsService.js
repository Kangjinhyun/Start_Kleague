const { pool } = require("../db");

async function getAllTeamsFromDB() {
  const result = await pool.query("SELECT * FROM teams ORDER BY id");
  return result.rows;
}

module.exports = {
  getAllTeamsFromDB
};

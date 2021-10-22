// 환경 변수
require("dotenv").config();

// pg client 생성
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

module.exports = pool;

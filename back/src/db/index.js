// 환경 변수
require("dotenv").config();

// pg client 생성
const { Pool } = require("pg");

// AWS RDS 문제 해결 DB 연결할 때, 문제 생기면
// console.log(process.env) 확인하기
const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

const initialize = async () => {
  // DB 연결
  const client = await pool.connect();

  // User 테이블 만드는 쿼리문
  await client.query(
    `
    CREATE TABLE IF NOT EXISTS public."User"(
      id          SERIAL      PRIMARY KEY,
      username    TEXT        NOT NULL     UNIQUE,
      password    TEXT        NOT NULL,
      name        TEXT        NOT NULL,
      email       TEXT        NOT NULL     UNIQUE,
      "createdAt" TIMESTAMP   NOT NULL
    )
    `
  );

  // 디비 연결 종료
  await client.release();
};

initialize();

module.exports = pool;

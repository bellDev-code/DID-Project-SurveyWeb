const router = require("express").Router();
const dayjs = require("dayjs");
const db = require("../db");
const { emailRegex } = "../utils/regex.js";

// Join User
router.post("/", async (req, res, next) => {
  console.log(req);
  const client = await db.connect();

  const now = dayjs().format();
  try {
    await client.query(
      `
        INSERT INTO public."User" (username, password, name, email, "createdAt")
        VALUES ($1, $2, $3, $4, $5)
      `,
      [req.body.username, req.body.password, req.body.name, req.body.email, now]
    );

    client.release();

    return res.send("user join");
  } catch (error) {
    console.error(error);
    return res.status(403).send(error.message);
  }
});

module.exports = router;

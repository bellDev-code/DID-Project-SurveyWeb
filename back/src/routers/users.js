const router = require("express").Router();
const dayjs = require("dayjs");
const db = require("../db");
const { emailRegex } = "../utils/regex.js";
const bcrypt = require("bcrypt");

// Join User
router.post("/", async (req, res, next) => {
  console.log(req);

  const now = dayjs().format();
  const salt = await bcrypt.genSalt(+process.env.PASSWORD_ROUND_LENGTH);
  const hashed = await bcrypt.hash(req.body.password, salt);

  const client = await db.connect();

  try {
    await client.query(
      `
        INSERT INTO public."User" (username, password, name, email, "createdAt")
        VALUES ($1, $2, $3, $4, $5)
      `,
      [req.body.username, hashed, req.body.name, req.body.email, now]
    );

    client.release();

    return res.send("user join");
  } catch (error) {
    console.error(error);
    return res.status(403).send(error.message);
  }
});

// GET USER
router.get("/:id", async (req, res, next) => {
  try {
    const client = await db.connect();
    console.log(req.params);

    const { id } = req.params;

    const result = await client.query(
      `
        SELECT id, name, email, "createdAt" FROM public."User" WHERE id = $1
      `,
      [parseInt(id)]
    );

    client.release();

    if (result.rows.length < 1) {
      return res.status(404).send("존재하지 않는 유저입니다.");
    }
    return res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(403).send(error.message);
  }
});

module.exports = router;

const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);

// db connecting test
// const test = async () => {
//   db.connect();

//   db.query("SELECT NOW()", (err, res) => {
//     console.log(err, res);
//   });

//   db.end();
// };

// test();

// Set port
app.set("PORT", process.env.PORT || 4190);

const api = require("./routers");

app.use("/api", api);

// Server Start
app.listen(app.get("PORT"), () => {
  console.log(`listen on localhost:${app.get("PORT")}`);
});

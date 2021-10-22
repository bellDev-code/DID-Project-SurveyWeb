const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

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

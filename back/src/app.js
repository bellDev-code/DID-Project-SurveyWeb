const express = require("express");
const db = require("./db");

const app = express();

const test = async () => {
  db.connect();

  db.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
  });

  db.end();
};

test();

// Set port
app.set("PORT", process.env.PORT || 4190);

// Server Start
app.listen(app.get("PORT"), () => {
  console.log(`listen on localhost:${app.get("PORT")}`);
});

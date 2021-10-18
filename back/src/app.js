const express = require("express");

const app = express();

// Set port
app.set("PORT", process.env.PORT || 4190);

// Server Start
app.listen(app.get("PORT"), () => {
  console.log(`listen on localhost:${app.get("PORT")}`);
});

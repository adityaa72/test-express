const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res, next) => {
  return res.send("i am listening ");
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

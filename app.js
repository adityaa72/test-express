const express = require("express");
require("dotenv").config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 8080;
console.log("PORT->", PORT)

app.get("/", (req, res, next) => {
  return res.send("i am listening ");
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

const express = require("express");
require("dotenv").config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 8001;
console.log("PORT->", PORT);

app.get("/", (req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log("headers", req.headers);
  console.log("ip", ip);
  return res.send("i am listening here");
});

app.listen(PORT, () => {
  console.log("Listening on port http://localhost:" + PORT);
});

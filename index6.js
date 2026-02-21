const express = require("express");
const app = express();
app.listen(8080);
//query string
app.get("/", (req, res) => {
  res.send(req.query.id+req.query.name);
});
app.get("/", (req, res) => {
  res.send(req.query.id);
});
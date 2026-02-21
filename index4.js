const express = require("express");
const app = express();
app.listen(8080);
app.get("/", (req, res) => {
  res.send("Hello World");
});
//request parameter
app.get("/:id",(req,res)=>{
const id = req.params.id
res.send(id)
})
app.get("/id/:id/name/:name",(req,res)=>{
const id = req.params.id
const name = req.params.name
res.send(id+name)
})
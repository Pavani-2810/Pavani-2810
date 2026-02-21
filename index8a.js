const express = require("express");
const app = express();
app.listen(8080);
//query string
app.use(express.json());
let products = [
  { id: 1, name: "laptop", price:50000 },
  { id: 2, name: "desktop", price:20000 },
  { id: 3, name: "Phone", price:15000},
];
app.get("/", (req, res) => {
  res.json(products);
});
app.post("/", (req, res) => {
  const user = req.body;
  products.push(user);
  res.json(products);
});
app.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter((user) => user.id !== id);
  res.json(products);
});
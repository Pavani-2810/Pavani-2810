const express = require("express");
const app = express();
app.listen(8080);
//query string
    const users = [
{id:1,name: "John",email: "john@gmail.com",role: "student"},
{id:2,name: "Admin",email: "admin@gmail.com",role: "admin"},
];
app.get("/", (req, res) => {
res.json(users);
});
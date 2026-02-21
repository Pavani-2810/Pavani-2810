const express = require("express");
const app = express();
app.listen(8080);
//query string
app.get("/", (req, res) => {
  const user ={ 
    name:"Pavs",
    age:21,
  };
    res.json(user)
  
});
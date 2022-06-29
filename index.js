const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.post("/form", (req, res) => {
  res.send(
    `My name is ${req.body.name} - ${req.body.email}. I study in ${req.body.class}-${req.body.section}`
  );
});

app.listen(3000, () => console.log("Server started"));

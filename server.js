const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("service up");
});

app.get("/greeting", (req, res) => {
  const name = req.query.name || "Guest";
  res.type("txt").send("Hello " + name + "!");
});

app.listen(port, () => {
  console.log("Listening on localhost:" + port);
});

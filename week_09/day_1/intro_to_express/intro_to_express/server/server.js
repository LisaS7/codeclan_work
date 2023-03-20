const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/", function (req, res) {
  res.json({ text: "Good morning, SR12" });
});

app.listen(8080, function () {
  console.log("Server running on port 8080");
});

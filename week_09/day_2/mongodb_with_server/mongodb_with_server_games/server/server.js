const express = require("express");
const app = express();
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");

app.use(cors());
app.use(express.json());

MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("games_hub");
    const gamesCollection = db.collection("games");
    const gamesRouter = createRouter(gamesCollection);
    app.use("/api/games", gamesRouter);
  })
  .catch((err) => console.error(err));

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`);
});

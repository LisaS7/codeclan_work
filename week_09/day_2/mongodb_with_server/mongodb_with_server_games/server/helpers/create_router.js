const express = require("express");

const createRouter = function (collection) {
  const router = express.Router();

  // INDEX
  router.get("/", (req, res) => {
    res.send("lalalala");
  });

  // SHOW

  // CREATE

  // DESTROY

  // UPDATE

  return router;
};

module.exports = createRouter;

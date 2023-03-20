const express = require("express");

function createRouter(data) {
  const router = express.Router();

  router.get("/", function (req, res) {
    res.json(data);
  });

  router.get("/:id", function (req, res) {
    res.json(data[req.params.id]);
  });

  router.post("/", function (req, res) {
    data.push(req.body);
    res.json(data);
  });

  router.put("/:id", function (req, res) {
    data[req.params.id] = req.body;
    res.json(data);
  });

  router.delete("/:id", function (req, res) {
    data.splice(req.params.id, 1);
    res.json(data);
  });

  return router;
}

module.exports = createRouter;

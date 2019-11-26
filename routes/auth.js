const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Get Loggod in a user");
});
router.post("/", (req, res) => {
  res.send("Login a user");
});

module.exports = router;

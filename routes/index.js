//dependencies.

const express = require("express");

//express router
const router = express.Router();
//routes
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

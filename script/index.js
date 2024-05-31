var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/home", (req, res) => {
  res.sendFile(__dirname + "/geolocation.js");
  res.sendFile(__dirname + "/password_verification.js");
});
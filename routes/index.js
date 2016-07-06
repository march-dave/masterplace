"use strict";

const express = require("express");
const router = express.Router();
const path = require("path");
const pathToIndex = path.join(__dirname, "../views/index.html");

router.get("/",  (req, res) => {
   res.sendFile(pathToIndex);
});

module.exports = router;

"use strict";

const express = require("express");
const router = express.Router();

router.use("/rentals", require("./rentals") );

module.exports = router;

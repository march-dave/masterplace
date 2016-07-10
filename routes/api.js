"use strict";

const express = require("express");
const router = express.Router();

router.use("/rentals", require("./rentals") );
router.use("/crimedata", require("./crimedata") );
router.use("/yelp", require("./yelp") );

module.exports = router;

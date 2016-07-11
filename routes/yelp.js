"use strict";

const express = require('express');
const router = express.Router();
const request = require('request');

const Yelp = require('yelp');

const yelp = new Yelp({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  token:  process.env.token,
  token_secret:  process.env.token_secret,
});

router.get('/', (req, res) => {

    // See http://www.yelp.com/developers/documentation/v2/search_api
    // yelp.search({ term: 'guesthouses', location: 'New York, NY' })
    yelp.search({ term: 'guesthouses', location: 'San Francisco, CA' })
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err);
    });

    // request(options, (err, response, body) => {
    //   if (err) return response.status(400).send(err);
    //   res.send(body);
    // });
});

module.exports = router;

"use strict";

const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {

    // consumer_key=HrokgIsGel056g8x_jqGcQ
    // consumer_secret=cd63Py4g72OIbavswLs9t4gAF00
    // token=vwYUbnYMnWzmi0JaGTZjqK7PPsQkmzm3
    // token_secret=XtvN4CYKibiq3rRNN41faNqSzJo


    var options = { method: 'GET',
      url: 'https://api.yelp.com/v2/search/',
      qs: {
            //  location: 'San Francisco, CA',
            //  category_filter: 'guesthouses',
            //  oauth_consumer_key: 'HrokgIsGel056g8x_jqGcQ',
            //  oauth_token: 'vwYUbnYMnWzmi0JaGTZjqK7PPsQkmzm3',
            //  oauth_signature_method: 'HMAC-SHA1',
            //  oauth_timestamp: '1468175161',
            //  oauth_nonce: 'FskZLA',
            //  oauth_version: '1.0',
            //  oauth_signature: 'I9Wt67nTAtDLZDtNz15NinX9up0%3D'
     },
     headers:
       { 'cache-control': 'no-cache' },
    };

    request(options, (err, response, body) => {
      if (err) return response.status(400).send(err);
      res.send(body);
    });
});

module.exports = router;

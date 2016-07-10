"use strict";

const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {

    var options = { method: 'GET',
      url: 'https://zilyo.p.mashape.com/search',
      qs: { swlatitude: '18.55', swlongitude: '-160.52999999999997' },
      headers:
       { provider: 'airbnb, housetrip',
         nelongitude: '154.48000000000002',
         nelatitude: '22.37',
         isinstantbook: 'true',
         'x-mashape-key': 'TIjgWU0XSrmsh0zxEqbXqvmwRoytp17KCCtjsnjGAbKORMhWbX' },
        };

    request(options, (err, response, body) => {
      if (err) return response.status(400).send(err);
      res.send(body);
    });
});

module.exports = router;

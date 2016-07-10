"use strict";

const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {

  var options = { method: 'GET',
    url: 'http://demo.ckan.org/api/action/datastore_search',
    qs:
     { resource_id: '8df68f1c-1c6f-4ba5-a0f2-a563b330f5d5',
       limit: '10000000000' },
    headers:
     { datatype: 'jsonp' }
    };

    request(options, function (err, response, body) {
      (err) ? response.status(400).send(err) : res.send(body);
    });
});

module.exports = router;

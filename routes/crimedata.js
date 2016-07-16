"use strict";

const express = require('express');
const router = express.Router();
const request = require('request');



var options = { method: 'GET',
  url: 'http://192.168.43.1:6624/osc/info',
  headers: 
   { 'postman-token': 'fe4819e9-1e13-254b-9080-21427e1d279c',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});





router.get('/', (req, res) => {

  var options = { method: 'GET',
    // url: 'http://demo.ckan.org/api/action/datastore_search',
    // qs:
    //  { resource_id: '8df68f1c-1c6f-4ba5-a0f2-a563b330f5d5',
    //    limit: '10000000000' },
    url: 'http://data.sfgov.org/resource/9v2m-8wqu.json'
    // ,
    // headers:
    //  { datatype: 'jsonp' }
    };

    request(options, function (err, response, body) {
      (err) ? response.status(400).send(err) : res.send(body);
    });
});

module.exports = router;

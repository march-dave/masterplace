"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    // var options = { method: 'GET',
    //   url: 'https://zilyo.p.mashape.com/search',
    //   qs: { swlatitude: '18.55', swlongitude: '-160.52999999999997' },
    //   headers:
    //    { provider: 'airbnb',
    //      nelongitude: '154.48000000000002',
    //      nelatitude: '22.37',
    //      isinstantbook: 'true',
    //      'x-mashape-key': 'TIjgWU0XSrmsh0zxEqbXqvmwRoytp17KCCtjsnjGAbKORMhWbX' },
    //   form: { firstName: 'john', lastName: 'doe' } };
    //
    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);
    //
    //   console.log(body);
    // });

    var params = {

    };

    res.send('respnse with a resource');
});

module.exports = router;

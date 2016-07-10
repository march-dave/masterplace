'use strict';

var app = angular.module('masterplaceApp');

app.service('Yelp', function($http, $q) {

  this.getGuestHouses = () => {
      return $http.get('/api/yelp')
    .then(res => {
      console.log('res.data', res.data);
      return $q.resolve(res.data);
    })
  };



});

'use strict';

var app = angular.module('masterplaceApp');

app.service('Yelp', function($http, $q) {

  this.getGuestHouses = () => {
      return $http.get('/api/yelp')
    .then(res => {
      return $q.resolve(res.data);
    })
  };
});

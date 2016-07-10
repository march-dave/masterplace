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

app.service('CrimeDate', function($http, $q) {
  this.getCrimeList = () => {
      return $http.get('/api/crimedata')
    .then(res => {
      return $q.resolve(res.data);
    })
  };
});

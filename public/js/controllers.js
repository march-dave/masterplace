'use strict';

var app = angular.module('masterplaceApp');

app.controller('homeCtrl', function($scope, Yelp) {

  var marker = {
      id: Date.now(),
      coords: {
          latitude: lat,
          longitude: lon
      }
  };

Yelp.getGuestHouses().then( res => {

    var lat = 0, long = 0;;
    for(var i=0; i<res.businesses.length; i++) {
      lat = res.businesses[i].location.coordinate.latitude;
      long = res.businesses[i].location.coordinate.longitude;
    }

  })



  angular.extend($scope, {
        map: {
            center: {
                latitude: 37.7669830322266,
                longitude: -122.432029724121
            },
            zoom: 11,
            markers: [],
            events: {
            click: function (map, eventName, originalEventArgs) {
                var e = originalEventArgs[0];
                var lat = e.latLng.lat(),lon = e.latLng.lng();
                var marker = {
                    id: Date.now(),
                    coords: {
                        latitude: lat,
                        longitude: lon
                    }
                };
                $scope.map.markers.push(marker);
                // console.log($scope.map.markers);
                $scope.$apply();
            }
        }
        }
    });

})

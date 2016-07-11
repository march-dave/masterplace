'use strict';

var app = angular.module('masterplaceApp');

app.controller('homeCtrl', function($scope, Yelp, CrimeDate) {

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
                  id: Date.now() + 10,
                  coords: {
                      latitude: lat,
                      longitude: lon
                  }
              };

              Yelp.getGuestHouses().then( res => {

                  var lati = 0, long = 0;
                  for(var i=0; i<res.businesses.length; i++) {
                    lati = res.businesses[i].location.coordinate.latitude;
                    long = res.businesses[i].location.coordinate.longitude;

                    marker = {
                      id: Date.now() + 10,
                      coords: {
                          latitude: lati,
                          longitude: long
                      }
                    }
                    $scope.map.markers.push(marker);
                  }
              });

              CrimeDate.getCrimeList().then( res => {

                console.log('CrimeDate', res);

                var lati = 0, long = 0;
                for(var i=0; i<20; i++) {
                  lati = res[i].y;
                  long = res[i].x;

                  marker = {
                    id: Date.now() + 12,
                    coords: {
                        latitude: lati,
                        longitude: long
                    }
                  }
                  $scope.map.markers.push(marker);
                }
              });

                // $scope.map.markers.push(marker);
                $scope.$apply();
            }
        }
        }
    });

})

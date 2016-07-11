'use strict';

var app = angular.module('masterplaceApp');

app.controller('homeCtrl', function($scope, $log, Yelp, CrimeDate) {

  angular.extend($scope, {
        map: {
            center: {
                latitude: 37.7669830322266,
                longitude: -122.432029724121
            },
            zoom: 13,
            markers: [],
            events: {
            click: function (map, eventName, originalEventArgs) {
              // var e = originalEventArgs[0];
              // var lat = e.latLng.lat(),lon = e.latLng.lng();

              // var marker = {
              //     id: Date.now() + 10,
              //     coords: {
              //         latitude: lat,
              //         longitude: lon
              //     }
              // };
              var marker = {};

              Yelp.getGuestHouses().then( res => {

                $log.log('res', res);

                  var lati = 0, long = 0, name = '';
                  for(var i=0; i<res.businesses.length; i++) {
                    lati = res.businesses[i].location.coordinate.latitude;
                    long = res.businesses[i].location.coordinate.longitude;
                    name = res.businesses[i].name;

                    marker = {
                      id: Date.now() + 10,
                      coords: {
                          latitude: lati,
                          longitude: long
                      },
                      options: {
                        draggable: false,
                        // labelContent: "num: " + i,
                        // labelAnchor: "0 55",
                        // labelClass: "marker-labels",
                        icon:"https://cdn0.iconfinder.com/data/icons/my-house-1/512/013-myhouse-32.png"
                      }
                    }

                    $scope.map.markers.push(marker);
                  }
              });


              // $scope.map.markers.push(marker);

              CrimeDate.getCrimeList().then( res => {

                var lati = 0, long = 0;
                for(var i=0; i<50; i++) {
                  lati = res[i].y;
                  long = res[i].x;

                  marker = {
                    id: Date.now() + 12,
                    coords: {
                        latitude: lati,
                        longitude: long
                    },
                    options: {
                      draggable: false,
                      // labelContent: "num: " + i + 100,
                      // labelAnchor: "0 55",
                      // labelClass: "marker-labels",
                      icon: "https://cdn4.iconfinder.com/data/icons/proglyphs-miscellaneous/512/Piracy-32.png"
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

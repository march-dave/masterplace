'use strict';

var app = angular.module('masterplaceApp');

app.controller('homeCtrl', function($scope) {

  console.log('homeCtrl');

  angular.extend($scope, {
        map: {
            center: {
                latitude: 42.3349940452867,
                longitude:-71.0353168884369
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
                console.log($scope.map.markers);
                $scope.$apply();
            }
        }
        }
    });

})

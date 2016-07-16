'use strict';

var app = angular.module('masterplaceApp');

app.controller('homeCtrl', function($scope, uiGmapGoogleMapApi, $log, Yelp, CrimeDate) {

  $scope.search = function() {

    console.log('$scope.near', $scope.near);

  }

  // uiGmapGoogleMapApi.then(function(maps) {
  //
  // });

  // function success(position) {
  //   console.log(position.coords.latitude);
  //   console.log(position.coords.longitude);
  // }
  //
  // if (navigator.geolocation) {
  //      navigator.geolocation.getCurrentPosition(success);
  //  }

  $scope.map = {

     center: {
        latitude: 37.769830322266,
        longitude: -122.432029724121
     },
     zoom: 14,
     markers: [ ],
     markersEvents: {
       mouseover: function(marker, eventName, model) {
         $scope.map.window.model = model;
         $scope.map.window.show = true;
       }
     },

     window: {
       marker: {
       },
       show: false,

       closeClick: function() {
         console.log('closeClick');
         this.show = false;
       },

       options: {}
     }
   };

   var marker =  {
      id: Date.now(),
      latitude: 38.7669830322266,
      longitude: -122.442029724121
    }

     Yelp.getGuestHouses().then( res => {

         var lati = 0, long = 0, name = '', rating = '', image_url = '';
         for(var i=0; i<res.businesses.length; i++) {
           lati = res.businesses[i].location.coordinate.latitude;
           long = res.businesses[i].location.coordinate.longitude;
           name = res.businesses[i].name;
           rating = res.businesses[i].rating;
           image_url = res.businesses[i].image_url;

          //  phone = res.businesses[i].display_phone;

          //  console.log('res.businesses[i]', res.businesses[i]);

           marker = {
              id: Date.now() + 10,
              latitude: lati,
              longitude: long,
              descript: name,
              rating: 'User Rating: ' + rating,
              image_url: image_url,
              options: {
              //  icon:"https://cdn0.iconfinder.com/data/icons/my-house-1/512/013-myhouse-32.png"
               icon:"https://cdn0.iconfinder.com/data/icons/free-business-desktop-icons/32/Home.png"
              }
           }

           $log.log('marker', marker);
           $scope.map.markers.push(marker);
         }
     });

         CrimeDate.getCrimeList().then( res => {

           var lati = 0, long = 0, descript = '', image_url = '';
           for(var i=0; i<50; i++) {

             lati = res[i].y;
             long = res[i].x;
             descript = res[i].descript;

             marker = {
               id: Date.now() + 12,
               latitude: lati,
               longitude: long,
               descript: descript,
               image_url: 'https://cdn4.iconfinder.com/data/icons/proglyphs-miscellaneous/512/Piracy-64.png',
               options: {
                //  labelContent: "num: " + i + 100,
                //  labelAnchor: "0 55",
                //  labelClass: "marker-labels",
                 icon: "https://cdn4.iconfinder.com/data/icons/proglyphs-miscellaneous/512/Piracy-32.png"
               }
             }
             $scope.map.markers.push(marker);

             $log.log('marker', marker);
           }
         });




  // angular.extend($scope, {
  //
  //       map: {
  //           center: {
  //               latitude: 37.7669830322266,
  //               longitude: -122.432029724121
  //           },
  //           zoom: 13,
  //           markers: [
  //
  //             {
  //              id: 21312321,
  //              coords: {
  //                  latitude: 37.8669830322266,
  //                  longitude: -122.432029724121
  //              },
  //              options: {
  //                draggable: false,
  //                labelContent: "num: " + 1,
  //                labelAnchor: "0 55",
  //                labelClass: "marker-labels",
  //                icon:"https://cdn2.iconfinder.com/data/icons/device-1-1/512/Untitled-4-32.png"
  //              }
  //            }
  //
  //           ],
  //
  //           markersEvents: {
  //             click: function(marker, eventName, model) {
  //               $log.log('Click marker');
  //               $scope.map.window.model = model;
  //               $scope.map.window.show = true;
  //             }
  //           },
  //           window: {
  //              marker: {},
  //              show: false,
  //              closeClick: function() {
  //                this.show = false;
  //              },
  //              options: {}
  //         },
  //
  //
  //
  //
  //           events: {
  //
  //           click: function (map, eventName, originalEventArgs) {
  //
  //             // var e = originalEventArgs[0];
  //             // var lat = e.latLng.lat(),lon = e.latLng.lng();
  //
  //             // var marker = {
  //             //     id: Date.now() + 10,
  //             //     coords: {
  //             //         latitude: lat,
  //             //         longitude: lon
  //             //     }
  //             // };
  //             var marker = {};
  //
  //             Yelp.getGuestHouses().then( res => {
  //
  //               // $log.log('res', res);
  //
  //                 var lati = 0, long = 0, name = '';
  //                 for(var i=0; i<res.businesses.length; i++) {
  //                   lati = res.businesses[i].location.coordinate.latitude;
  //                   long = res.businesses[i].location.coordinate.longitude;
  //                   name = res.businesses[i].name;
  //
  //                   marker = {
  //                     id: Date.now() + 10,
  //                     coords: {
  //                         latitude: lati,
  //                         longitude: long
  //                     },
  //                     options: {
  //                       draggable: false,
  //                       // labelContent: "num: " + i,
  //                       // labelAnchor: "0 55",
  //                       // labelClass: "marker-labels",
  //                       icon:"https://cdn0.iconfinder.com/data/icons/my-house-1/512/013-myhouse-32.png"
  //                     }
  //                   }
  //                   $scope.map.markers.push(marker);
  //                 }
  //             });
  //
  //
  //             // $scope.map.markers.push(marker);
  //
  //             CrimeDate.getCrimeList().then( res => {
  //
  //               var lati = 0, long = 0;
  //               for(var i=0; i<50; i++) {
  //                 lati = res[i].y;
  //                 long = res[i].x;
  //
  //                 marker = {
  //                   id: Date.now() + 12,
  //                   coords: {
  //                       latitude: lati,
  //                       longitude: long
  //                   },
  //                   options: {
  //                     draggable: false,
  //                     // labelContent: "num: " + i + 100,
  //                     // labelAnchor: "0 55",
  //                     // labelClass: "marker-labels",
  //                     icon: "https://cdn4.iconfinder.com/data/icons/proglyphs-miscellaneous/512/Piracy-32.png"
  //                   }
  //                 }
  //                 $scope.map.markers.push(marker);
  //               }
  //             });
  //
  //               $scope.$apply();
  //           }
  //         }
  //       }
  //   });

})

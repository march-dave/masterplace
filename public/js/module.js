'use strict';

var app = angular.module('masterplaceApp', ['ui.router', 'uiGmapgoogle-maps']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    // .state('list', {
    //   url: '/list',
    //   templateUrl: '/html/list.html',
    //   controller: 'listCtrl',
    //   resolve: {
    //     pokedex: function(Pokemon) {
    //       return Pokemon.getPokedex();
    //     }
    //   }
    // })
    // .state('detail', {
    //   url: '/detail/:id',
    //   templateUrl: '/html/detail.html',
    //   controller: 'detailCtrl',
    //   resolve: {
    //     pokemon: function(Pokemon, $stateParams) {
    //       var id = $stateParams.id;
    //       return Pokemon.getById(id);
    //     }
    //   }
    // })

  $urlRouterProvider.otherwise('/');
});


// "use strict";
//
// var app = angular.module('masterplaceApp', ['ui.router']);
//
// app.config(function($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('dashboard', {
//       url: '/',
//       templateUrl: '/html/home.html',
//       controller: 'dashboardCtrl'
//     })
//
//   $urlRouterProvider.otherwise('/');
// });

// angular
//     .module("masterplaceApp", ["ui.router"])
//
//     .config(function($stateProvider, $urlRouterProvider) {
//         $stateProvider
//             .state(dashboard)
//
//         $urlRouterProvider.otherwise("/dashboard");
//     })
//
// let dashboard = {
//     name: 'dashboard',
//     url: '/dashboard',
//     views: {
//         'map': {
//             // templateUrl: '/html/dashboard_summary.html',
//             controller: 'dashboardCtrl'
//         }
//     }
// };

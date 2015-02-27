'use strict';

/**
 * @ngdoc overview
 * @name flashingLedApp
 * @description
 * # flashingLedApp
 *
 * Main module of the application.
 */
angular
  .module('flashingLedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
            .when('/message', {
        templateUrl: 'views/message.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

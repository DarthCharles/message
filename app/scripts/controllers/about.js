'use strict';

/**
 * @ngdoc function
 * @name flashingLedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flashingLedApp
 */
angular.module('flashingLedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

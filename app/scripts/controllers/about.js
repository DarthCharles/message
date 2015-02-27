'use strict';

/**
 * @ngdoc function
 * @name flashingLedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flashingLedApp
 */
angular.module('flashingLedApp')
  .controller('AboutCtrl', function ($scope, BigAssMessage) {
   $scope.Message = BigAssMessage.getMessage();
   console.log($scope.Message);
  });

'use strict';

/**
 * @ngdoc function
 * @name flashingLedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flashingLedApp
 */
angular.module('flashingLedApp')
  .controller('MainCtrl', function ($scope, BigAssMessage) {
    $scope.Message = {};


    $scope.saveMessage = function() {
        BigAssMessage.setMessage($scope.Message);
    };
    
  });

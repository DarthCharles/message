'use strict';

/**
 * @ngdoc function
 * @name flashingLedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flashingLedApp
 */
angular.module('flashingLedApp')
.service('BigAssMessage', function(){
  this.message = '';
  this.setMessage = function(data) {
        this.message = data;
  };
  this.getMessage = function() {
        return this.message;
  };
});
 'use strict';

/**
 * @ngdoc function
 * @name flashingLedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flashingLedApp
 */
 angular.module('flashingLedApp')
 .directive('flash', function() {
  return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element) {    	
          function flashText() {
            var color = true;
            setInterval(function() {            
              if (color) {
                element.css('background-color', 'red');
                color = false;
              } else {
                element.css('background-color', 'blue');
                color = true;
              }
            }, 10); //Aqui se modifica el valor de refresco
          }
          flashText();
        }
      };
    });

 angular.module('flashingLedApp')
 .directive('text', function() {
  return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element) {
          function flashText() {
            var color = true;
            setInterval(function() {            
              if (color) {
                element.css('color', '#fff');
                color = false;
              } else {
                element.css('color', '#000');
                color = true;
              }
            } , 10); //Aqui se modifica el valor de refresco
          }
          flashText();
        }
      };
    });
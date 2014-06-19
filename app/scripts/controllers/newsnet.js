'use strict';

/**
 * @ngdoc function
 * @name griddirApp.controller:NewsnetCtrl
 * @description
 * # NewsnetCtrl
 * Controller of the griddirApp
 */
angular.module('griddirApp')
  .controller('NewsnetCtrl', function ($scope) {
    $scope.selected = 0;
    $scope.select = function(idx){
      $scope.selected = idx;
    };
    $scope.items = [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan'
    ];
  });

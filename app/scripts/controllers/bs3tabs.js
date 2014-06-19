/* global angular, console, $ */

'use strict';

/**
 * @ngdoc function
 * @name griddirApp.controller:Bs3tabsCtrl
 * @description
 * # Bs3tabsCtrl
 * Controller of the griddirApp
 */
angular.module('griddirApp')
  .controller('Bs3tabsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.select = function (e, that) {
      e.preventDefault();
      $('#tab'+that).tab('show');
    };

  });

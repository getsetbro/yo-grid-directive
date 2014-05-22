/* global angular */

'use strict';

angular
  .module('griddirApp', [
    'ngResource',
    'ngRoute',
    'ngGrid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/myRoute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl'
      })
      .when('/ngGrid', {
        templateUrl: 'views/nggrid.html',
        controller: 'NggridCtrl'
      })
      .when('/multiselect', {
        templateUrl: 'views/multiselect.html',
        controller: 'MultiselectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

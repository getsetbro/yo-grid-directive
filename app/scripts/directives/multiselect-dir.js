'use strict';

angular.module('griddirApp')
  .directive('multiselectdir', function () {
    return {
      templateUrl: 'partials/multiselect_tmp.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });

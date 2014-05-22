/* global angular */

'use strict';

angular.module('griddirApp')
  .directive('nggriddirective', function () {
    return {
      template: '<div>nggriddirective</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the ngGridDirective directive');
      }
    };
  });

'use strict';

angular.module('griddirApp')
  .directive('ngGridDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ngGridDirective directive');
      }
    };
  });

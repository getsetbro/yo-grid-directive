/* global angular */
'use strict';

angular.module('griddirApp')
  .directive('griddirective', function () {
    return {
      templateUrl: 'partials/modaldirective.html',
      restrict: 'E',
      scope: '=',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the griddirective directive');
        scope.header = attrs.hdr;
        var tr = element.find('.tr-main');
        var toprow = element.parent().find('.toprow table');
        var leftrow = element.parent().find('.leftrow tbody');
        var trtable = tr.find('> table');
        tr.bind('scroll', function () {
            toprow.css('left',trtable.position().left +'px');
            leftrow.css('top', (trtable.position().top + 32) +'px');
            //if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight) {
              //scope.$apply(attrs.scrolly);
            //}
        });
        setTimeout(function() {
          element.parent().find('.toprow th').click(function(){
            scope.$apply( scope.tabular.reverse() );
          });
        }, 300);

      }
    };
  });

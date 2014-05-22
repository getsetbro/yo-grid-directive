'use strict';

describe('Directive: ngGridDirective', function () {

  // load the directive's module
  beforeEach(module('griddirApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-grid-directive></ng-grid-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngGridDirective directive');
  }));
});

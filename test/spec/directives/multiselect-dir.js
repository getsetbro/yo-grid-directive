'use strict';

describe('Directive: multiselectDir', function () {

  // load the directive's module
  beforeEach(module('griddirApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<multiselect-dir></multiselect-dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the multiselectDir directive');
  }));
});

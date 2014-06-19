'use strict';

describe('Controller: Bs3tabsCtrl', function () {

  // load the controller's module
  beforeEach(module('griddirApp'));

  var Bs3tabsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Bs3tabsCtrl = $controller('Bs3tabsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: Tabtemp2Ctrl', function () {

  // load the controller's module
  beforeEach(module('griddirApp'));

  var Tabtemp2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Tabtemp2Ctrl = $controller('Tabtemp2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

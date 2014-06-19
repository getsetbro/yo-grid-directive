'use strict';

describe('Controller: TabtempCtrl', function () {

  // load the controller's module
  beforeEach(module('griddirApp'));

  var TabtempCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabtempCtrl = $controller('TabtempCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

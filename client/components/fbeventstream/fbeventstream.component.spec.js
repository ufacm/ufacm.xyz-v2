'use strict';

describe('Component: fbeventstream', function() {
  // load the component's module
  beforeEach(module('ufacmXyzV2App.fbeventstream'));

  var fbeventstreamComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    fbeventstreamComponent = $componentController('fbeventstream', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

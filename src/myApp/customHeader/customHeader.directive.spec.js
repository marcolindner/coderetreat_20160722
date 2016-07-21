describe('customHeader directive', function () {
  'use strict';

  var $rootScope, $compile, $element;
  var template = '<custom-header></custom-header>';

  beforeEach(module('myApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {

    $rootScope = _$rootScope_;
    $compile = _$compile_;

    $element = $compile(template)($rootScope);
    $rootScope.$digest();
  }));

  it('should be rendered', function () {
    expect($element.find('nav').length).toEqual(1);
  });
});

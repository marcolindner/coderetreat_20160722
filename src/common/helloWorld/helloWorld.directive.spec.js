describe('helloWorld', function () {
  'use strict';

  var $rootScope, $compile, $element;
  var template = '<hello-world></hello-world>';

  beforeEach(module('common'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {

    $rootScope = _$rootScope_;
    $compile = _$compile_;

    $element = $compile(template)($rootScope);
    $rootScope.$digest();
  }));

  describe('exampleProperty', function () {
    it('should be rendered', function () {
      expect($element.find('h2').text()).toContain('Hello World');
    });
  });
});

angular.module('myApp').directive('customHeader', function () {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'myApp/customHeader/customHeader.html'
  };
});

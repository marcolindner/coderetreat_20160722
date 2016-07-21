angular.module('myApp').directive('customFooter', function () {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'myApp/customFooter/customFooter.html'
  };
});

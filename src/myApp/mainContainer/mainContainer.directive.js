angular.module('myApp').directive('mainContainer', function () {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'myApp/mainContainer/mainContainer.html',
    controller: function ($scope) {
      $scope.greeting = 'Hello World !!';
    }
  };
});

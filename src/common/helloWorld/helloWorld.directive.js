/**
 * @ngdoc directive
 * @name helloWorld
 * @element div
 * @function
 *
 * @description
 * Displays $scope.helloWorld in h2 Tag
 *
 *
 * @example
   <helloWorld></helloWorld>
 */
angular.module('common').directive('helloWorld', function () {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'common/helloWorld/helloWorld.html',
    controller: function ($scope) {
      $scope.helloWorld = 'Hello World';
    }
  };
});

angular.module('myApp').directive('bitcoinChart', function () {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'myApp/bitcoinChart/bitcoinChart.html',
    controller: function ($scope, bitcoinChartService) {
      bitcoinChartService.getValues().then(function (result) {
        $scope.bitcoinData = result;
      });
    }
  };
});

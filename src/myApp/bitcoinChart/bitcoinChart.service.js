angular.module('myApp').factory('bitcoinChartService', function ($http) {
  'use strict';
  var serviceUrl = 'http://localhost:8001/bitcoin/';

  return {
    getValues: function () {
      return $http.get(serviceUrl).then(function (result) {
        return result;
      });
    }
  };
});

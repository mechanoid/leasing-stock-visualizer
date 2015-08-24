/*jslint white: true*/
/*global angular*/

angular.module('stockTable', [])
.controller('StockTableCtrl', ['$scope', function($scope) {
  "use strict";
  
  $scope.items = [{date: new Date(), consumption: 12}];
}]);

/*jslint white: true, devel: true, nomen: true */
/*global angular*/

angular.module('stockTable', ['leasingStock'])
.controller('StockTableCtrl', ['$rootScope', '$scope', 'items', function($rootScope, $scope, items) {
  "use strict";

  items.all().then(function(items) {
    $scope.items = items;
    $rootScope.$broadcast('items.queried');
  });

  $rootScope.$on('item.created', function(_, item) {
    $scope.items.push(angular.copy(item));
  });
}]);

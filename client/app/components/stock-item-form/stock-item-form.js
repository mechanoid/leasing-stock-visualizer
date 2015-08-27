/*jslint white: true, devel: true*/
/*global angular*/

angular.module('stockItemForm', ['leasingStock'])
.controller('StockItemFormCtrl', ['$rootScope', '$scope', 'items', function($rootScope, $scope, items) {
  "use strict";

  $scope.addItem = function(item) {
    items.addItem(item).then(function() {
      $rootScope.$broadcast('item.created', item);
    });
  };
}]);

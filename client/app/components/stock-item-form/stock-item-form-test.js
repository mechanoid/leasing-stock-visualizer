/*jslint browser: true, devel: true, todo: true, white: true, indent: 2, nomen: true, regexp: true */
/*global  module, inject, it, beforeEach, expect, describe, spyOn */

describe('StockItemFormController', function(){
  "use strict";

  var addItemController, scope, items, deferred;

  beforeEach(module('leasingStockApp'));

  beforeEach(inject(function ($controller, $q, $rootScope) {
    items = {
      addItem: function () {
        deferred = $q.defer();
        return deferred.promise;
      }
    };

    spyOn(items, 'addItem').and.callThrough();
    spyOn($rootScope, '$broadcast').and.callThrough();

    scope = $rootScope.$new();

    addItemController = function () {
      return $controller('StockItemFormCtrl', {
          $scope: scope,
          items: items
      });
    };
  }));

  it('should propagate item updated via global event', inject(function($rootScope) {
    addItemController();
    scope.addItem("item_1");
    deferred.resolve();
    scope.$digest();
    expect($rootScope.$broadcast).toHaveBeenCalledWith("item.created", "item_1");
  }));

  it('should reset item after adding an item', inject(function($rootScope) {
    addItemController();
    scope.addItem("item_1");
    deferred.resolve();
    scope.$digest();
    expect(scope.item).toBe(null);
  }));

});

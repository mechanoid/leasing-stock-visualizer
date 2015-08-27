/*jslint browser: true, devel: true, todo: true, white: true, indent: 2, nomen: true, regexp: true */
/*global  module, inject, it, beforeEach, expect, describe, spyOn */

describe('StockTableController', function(){
  "use strict";

  var allController, scope, items, deferred;

  beforeEach(module('leasingStockApp'));

  beforeEach(inject(function ($controller, $q, $rootScope) {
    items = {
      all: function () {
        deferred = $q.defer();
        return deferred.promise;
      }
    };

    spyOn(items, 'all').and.callThrough();

    scope = $rootScope.$new();

    allController = function () {
      return $controller('StockTableCtrl', {
          $scope: scope,
          items: items
      });
    };
  }));

  it('should retrieve a list of items (number do the job here)', function() {
    allController();
    deferred.resolve([1, 2, 3]);
    scope.$digest();
    expect(scope.items.length).toBe(3);
  });

  it('should add an item if it is propagated due to a proper event', inject(function($rootScope) {
    allController();
    deferred.resolve([1]);
    scope.$digest();

    expect(scope.items.length).toBe(1);
    $rootScope.$broadcast('item.created', 2);
    expect(scope.items.length).toBe(2);
  }));
});

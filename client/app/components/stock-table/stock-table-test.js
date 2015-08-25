/*jslint browser: true, devel: true, todo: true, white: true, indent: 2, nomen: true, regexp: true */
/*global  module, inject, it, beforeEach, expect, describe */

describe('StockTableCtrl', function(){
  "use strict";

  beforeEach(module('leasingStockApp'));

  it('should have a stock item', inject(function($controller) {
    var scope = {};
    $controller('StockTableCtrl', {$scope:scope});

    expect(scope.items.length).toBe(1);
  }));

});

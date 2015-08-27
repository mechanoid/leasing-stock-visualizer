/*jslint white: true, devel: true*/
/*global angular*/

angular.module('leasingStock', [])
.factory('items', ['$resource', function($resource){
  "use strict";
  var items
    , DataPoints = $resource('http://localhost:3000/data_points', {}, {
      'create':  { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } },
      'index':   { method: 'GET', isArray: true, headers: { 'Accept': 'application/json' } },
      'show':    { method: 'GET', isArray: false, headers: { 'Accept': 'application/json' } },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    });

  items = {
    all: function() {
      return DataPoints.index().$promise;
    }

    , addItem: function(item) {
      return DataPoints.create(item).$promise;
    }
  };

  return items;
}]);

/*jslint white: true*/
/*global angular*/

angular.module('leasingStockApp', [
  'ngResource'
  , 'stockTable'
  , 'stockItemForm'
])
.constant('appConfig', { version: '0.0.1', stockLimit: 25000 });

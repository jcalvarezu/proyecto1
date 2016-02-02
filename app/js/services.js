'use strict';

/* Services */

var consoleServices = angular.module('consoleServices', ['ngResource']);

consoleServices.factory('Console', ['$resource',
  function($resource){
    return $resource('consoles/:consoleId.json', {}, {
      query: {method:'GET', params:{consoleId:'consoles'}, isArray:true}
    });
  }]);

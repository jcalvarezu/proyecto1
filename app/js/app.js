'use strict';

/* App Module */

var consoleApp = angular.module('consoleApp', [
  'ngRoute',
  'consoleAnimations',

  'consoleControllers',
  'phonecatFilters',
  'consoleServices'
]);

consoleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/consoles', {
        templateUrl: 'partials/console-list.html',
        controller: 'ConsoleListCtrl'
      }).
      when('/consoles/:consoleId', {
        templateUrl: 'partials/console-detail.html',
        controller: 'ConsoleDetailCtrl'
      }).
      otherwise({
        redirectTo: '/consoles'
      });
  }]);

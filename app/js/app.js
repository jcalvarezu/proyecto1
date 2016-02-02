'use strict';

/* App Module */

var consoleApp = angular.module('consoleApp', [
  'ngRoute',
  'phonecatAnimations',

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
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'ConsoleDetailCtrl'
      }).
      otherwise({
        redirectTo: '/consoles'
      });
  }]);

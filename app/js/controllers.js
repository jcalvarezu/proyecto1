'use strict';

/* Controllers */

var consoleControllers = angular.module('consoleControllers', []);

consoleControllers.controller('ConsoleListCtrl', ['$scope', 'Console',
  function($scope, Console) {
    $scope.consoles = Console.query();
    $scope.orderProp = 'age';
  }]);

consoleControllers.controller('ConsoleDetailCtrl', ['$scope', '$routeParams', 'Console',
  function($scope, $routeParams, Console) {
    $scope.console = Console.get({consoleId: $routeParams.consoleId}, function(console) {
      $scope.mainImageUrl = console.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

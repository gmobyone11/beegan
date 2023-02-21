'use strict';

angular.module('myApp.games', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/games', {
      templateUrl: '/docs/Views/games/games.html',
    controller: 'GamesCtrl'
  });
}])

.controller('GamesCtrl', [function() {
  
}]);
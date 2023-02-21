'use strict';

angular.module('myApp.nikki', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/nikki', {
      templateUrl: '/docs/Views/nikki/nikki.html',
      controller: 'NikkiCtrl'
  });
}])

.controller('NikkiCtrl', [function() {
  
}]);
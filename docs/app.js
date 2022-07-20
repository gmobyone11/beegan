'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

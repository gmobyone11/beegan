'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
      templateUrl: '/docs/Views/gallery/gallery.html',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', [function() {
  $('.carousel-control').click(function(e){
    e.preventDefault();
  });
}]);
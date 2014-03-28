'use strict';

angular.module('ModelShareApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

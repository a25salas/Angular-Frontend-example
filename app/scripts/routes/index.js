'use strict';

/**
 * @ngdoc function
 * @name myappApp.service:MainCtrl
 * @description
 * # service
 * Service of the myappApp
 */
angular.module('myappApp').config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
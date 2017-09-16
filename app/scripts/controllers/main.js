'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('MainCtrl', function($scope, $rootScope, $location) {
	  
	  $scope.menu = [
	    {label:'Home', route:'/'},
	    {label:'Store', route:'/store'},
	    {label:'Employee', route:'/employee'},
      {label:'Customer', route:'/customer'},
	   ];
	  
	  $scope.menuActive = '/';
	  
	  $rootScope.$on('$routeChangeSuccess', function() {
       $scope.menuActive = $location.path();
    });
		
	});

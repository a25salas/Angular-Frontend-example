'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('StoreCtrl', function ($scope, StoreService) {
    $scope.title = "CRUD Stores";
    $scope.stores = [];
    $scope.current = {
      "name": "",
      "id":-1
    };
    $scope.loadRemoteData = () => {
      StoreService.getStores()
        .then(
        function (stores) {
          $scope.stores = stores;
          console.log(stores);
        });
    };
    $scope.setCurrent = (e) =>{
      $scope.state = "update";
       $scope.current = e;}
    
     $scope.changeState = (e) =>  $scope.state = "add";

    $scope.removeStore = (e) => {
      StoreService.removeStore(e.id)
        .then(
        function () {
          $scope.loadRemoteData();
        });
    };

        $scope.updateStore = () => {
      StoreService.updateStore( $scope.current)
        .then(
        function () {
          $scope.loadRemoteData();
        });
    };

         $scope.addStore = () => {
      StoreService.addStore( $scope.current)
        .then(
        function () {
          $scope.loadRemoteData();
        });
    };

    // init
    $scope.loadRemoteData();
  });

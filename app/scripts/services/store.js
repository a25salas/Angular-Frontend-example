'use strict';

/**
 * @ngdoc function
 * @name myappApp.service:MainCtrl
 * @description
 * # service
 * Service of the myappApp
 */
angular.module('myappApp')
.service("StoreService",
            function( $http, $q ) {
               
                // ---
                // PUBLIC METHODS.
                // ---
                // I add a friend with the given name to the remote collection.
                function addStore( current ) {
                    var request = $http({
                        method: "POST",
                        url: "http://localhost:1337/store/",
                         data: {
                            name: current.name
                        }
                    });  
                    
                    return( request.then( handleSuccess, handleError ) );
                }

                  function updateStore( current ) {
                    var request = $http({
                        method: "POST",
                        url: "http://localhost:1337/store/"+current.id,
                         data: {
                            name: current.name
                        }
                    });
                    return( request.then( handleSuccess, handleError ) );
                }
                // I get all of the friends in the remote collection.
                function getStores() {
                    var request = $http({
                        method: "GET",
                        url: "http://localhost:1337/store/",
                    });
                  
                    return( request.then( handleSuccess, handleError ) );
        
                }
                // I remove the friend with the given ID from the remote collection.
                function removeStore( id ) {
                    var request = $http({
                        method: "DELETE",
                        url: "http://localhost:1337/store/",
                        data: {
                            id: id
                        }
                    });
                    return( request.then( handleSuccess, handleError ) );
                }
                // ---
                // PRIVATE METHODS.
                // ---
                // I transform the error response, unwrapping the application dta from
                // the API response payload.
                function handleError( response ) {
                    // The API response from the server should be returned in a
                    // nomralized format. However, if the request was not handled by the
                    // server (or what not handles properly - ex. server error), then we
                    // may have to normalize it on our end, as best we can.
                    if (
                        ! angular.isObject( response.data ) ||
                        ! response.data.message
                        ) {
                        return( $q.reject( "An unknown error occurred." ) );
                    }
                    // Otherwise, use expected error message.
                    return( $q.reject( response.data.message ) );
                }
                // I transform the successful response, unwrapping the application data
                // from the API response payload.
                function handleSuccess( response ) {
                    return( response.data );
                }
                 // Return public API.
                return({
                    addStore: addStore,
                    updateStore:updateStore,
                    getStores: getStores,
                    removeStore: removeStore
                });
            });
(function() {
    'use strict';

    angular
        .module('stormtrooperApp')
        .factory('authExpiredInterceptor', authExpiredInterceptor);


    authExpiredInterceptor.$inject = ['$rootScope', '$q', '$injector', '$localStorage', '$sessionStorage'];

    function authExpiredInterceptor($rootScope, $q, $injector, $localStorage, $sessionStorage) {
        var service = {
            responseError: responseError
        };

        return service;

        function responseError(response) {
            if (response.status === 401) {
                var Principal = $injector.get('Principal');
                if (Principal.isAuthenticated()) {
                    console.log('prince is authenticated');
                    //Auth.authorize(true);
                }
            }
            return $q.reject(response);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('stormtrooperApp')
        .factory('Account', Account);

    Account.$inject = ['$resource'];

    function Account ($resource) {
        var service = $resource('me', {}, {
            'get': { method: 'GET', params: {}, isArray: false,
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            }
        });

        return service;
    }
})();

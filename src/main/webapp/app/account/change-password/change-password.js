(function() {
    'use strict';

    angular.module('stormtrooperApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('change-password', {
            parent: 'account',
            url: '/change-password?sptoken',
            data: {
                authorities: [],
                pageTitle: 'change-password.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/account/change-password/change-password.html'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('change-password');
                    return $translate.refresh();
                }]
            }
        });
    }
})();

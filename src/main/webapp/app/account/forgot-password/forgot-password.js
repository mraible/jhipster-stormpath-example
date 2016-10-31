(function() {
    'use strict';

    angular.module('stormtrooperApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('forgot-password', {
            parent: 'account',
            url: '/forgot-password',
            data: {
                authorities: [],
                pageTitle: 'forgot-password.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/account/forgot-password/forgot-password.html'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('forgot-password');
                    return $translate.refresh();
                }]
            }
        });
    }
})();

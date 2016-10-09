(function() {
    'use strict';

    angular
        .module('stormtrooperApp', [
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            //'angular-loading-bar',
            'stormpath',
            'stormpath.templates'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler', '$stormpath', '$rootScope', '$state'];

    function run(stateHandler, translationHandler, $stormpath, $rootScope, $state) {
        stateHandler.initialize();
        translationHandler.initialize();

        /*$stormpath.uiRouter({
            loginState: 'login',
            defaultPostLoginState: 'home'
        });*/

        /*
         We want to redirect users back to the home state after they logout, so we watch for the
         logout event and then transition them to the login state
         */
        /*$rootScope.$on('$sessionEnd', function () {
            $state.transitionTo('home');
        });*/
    }
})();

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
            'stormpath',
            'stormpath.templates',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar'
        ])
        .run(run);

    run.$inject = ['stateHandler', '$user', 'translationHandler', '$stormpath'];

    function run(stateHandler, $user, translationHandler, $stormpath) {
        stateHandler.initialize();
        $stormpath.uiRouter({
            defaultPostLoginState: 'home',
            loginState: 'login'
        });
        // check to see if Stormpath user exists
        $user.get();
        translationHandler.initialize();
    }
})();

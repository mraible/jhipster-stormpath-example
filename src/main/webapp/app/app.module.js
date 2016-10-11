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

    run.$inject = ['stateHandler', 'translationHandler', '$user'];

    function run(stateHandler, translationHandler, $user) {
        stateHandler.initialize();
        translationHandler.initialize();

        // check to see if Stormpath user exists
        $user.get();
    }
})();

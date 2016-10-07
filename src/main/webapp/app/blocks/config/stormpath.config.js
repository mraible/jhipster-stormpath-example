(function () {
    'use strict';

    angular
        .module('stormtrooperApp')
        .config(stormpathConfig);

    stormpathConfig.$inject = ['$locationProvider', 'STORMPATH_CONFIG'];

    function stormpathConfig($locationProvider, STORMPATH_CONFIG) {
        /*
         At the moment, JSON is not the default content type when posting forms, but
         most of our framework integrations are expecting JSON, so we need to manually set
         this.  JSON will be the default in the next major release of the Angular SDK.
         */
        //$locationProvider.html5Mode(false);

        STORMPATH_CONFIG.FORM_CONTENT_TYPE = 'application/json';
    }
})();

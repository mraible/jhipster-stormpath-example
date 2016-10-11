(function() {
    'use strict';

    angular
        .module('stormtrooperApp')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['Principal', 'JhiLanguageService', '$translate'];

    function SettingsController (Principal, JhiLanguageService, $translate) {
        var vm = this;

        vm.error = null;
        vm.save = save;
        vm.settingsAccount = null;
        vm.success = null;

        /**
         * Store the "settings account" in a separate variable, and not in the shared "account" variable.
         */
        var copyAccount = function (account) {
            return {
                activated: account.activated,
                email: account.email,
                firstName: account.firstName,
                langKey: account.langKey,
                lastName: account.lastName,
                login: account.login
            };
        };

        Principal.identity().then(function(account) {
            vm.settingsAccount = copyAccount(account);
        });

        function save () {

        }
    }
})();

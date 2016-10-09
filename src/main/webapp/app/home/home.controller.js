(function() {
    'use strict';

    angular
        .module('stormtrooperApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'LoginService', '$state', 'STORMPATH_CONFIG'];

    function HomeController ($scope, LoginService, $state, STORMPATH_CONFIG) {
        var vm = this;

        var authenticated = false;
        vm.account = null;
        vm.isAuthenticated = function() {
            return authenticated;
        };
        vm.login = LoginService.open;
        vm.register = register;

        $scope.$on(STORMPATH_CONFIG.AUTHENTICATION_SUCCESS_EVENT_NAME, function($event, account) {
            console.log(account);
            vm.account = account;
            authenticated = true;
            // vm.isAuthenticated = Principal.isAuthenticated; # does this need to list to a Stormpath event?
        });

        function register () {
            $state.go('register');
        }
    }
})();

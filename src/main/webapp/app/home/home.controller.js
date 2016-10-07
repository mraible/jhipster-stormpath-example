(function() {
    'use strict';

    angular
        .module('stormtrooperApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'LoginService', '$state'];

    function HomeController ($scope, LoginService, $state) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = function() {
            return false;
        };
        vm.login = LoginService.open;
        vm.register = register;

        function register () {
            $state.go('register');
        }
    }
})();

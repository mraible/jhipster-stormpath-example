(function() {
    'use strict';

    angular
        .module('stormtrooperApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope', '$state', '$scope', 'Auth', '$uibModalInstance', 'STORMPATH_CONFIG'];

    function LoginController ($rootScope, $state, $scope, Auth, $uibModalInstance, STORMPATH_CONFIG) {
        var vm = this;

        function cancel () {
            vm.credentials = {
                username: null,
                password: null,
                rememberMe: true
            };
            vm.authenticationError = false;
            $uibModalInstance.dismiss('cancel');
        }

        $scope.$on(STORMPATH_CONFIG.AUTHENTICATION_SUCCESS_EVENT_NAME, function() {
            console.log('Stormpath authentication succeeded! :)');
            vm.authenticationError = false;
            $uibModalInstance.close();
            if ($state.current.name === 'register' || $state.current.name === 'activate' ||
                $state.current.name === 'finishReset' || $state.current.name === 'requestReset') {
                $state.go('home');
            }

            $rootScope.$broadcast('authenticationSuccess');

            // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // since login is succesful, go to stored previousState and clear previousState
            if (Auth.getPreviousState()) {
                var previousState = Auth.getPreviousState();
                Auth.resetPreviousState();
                $state.go(previousState.name, previousState.params);
            }
        });

        $scope.$on(STORMPATH_CONFIG.AUTHENTICATION_FAILURE_EVENT_NAME, function() {
            vm.authenticationError = true;
            console.log('Stormpath authentication failed! :(');
        });

        function register () {
            $uibModalInstance.dismiss('cancel');
            $state.go('register');
        }

        function requestResetPassword () {
            $uibModalInstance.dismiss('cancel');
            $state.go('requestReset');
        }
    }
})();

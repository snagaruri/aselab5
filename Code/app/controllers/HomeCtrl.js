frontEnd.controller('HomeCtrl', ["$scope", "$location", "authFact", "$cookieStore",
    function ($scope, $location, authFact, $cookieStore) {
        $scope.FBLogin = function () {
            FB.login(function (response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', function (response) {
                        /*setting the user object*/
                        $cookieStore.put('userObj', response);

                        /*get the access token*/
                        var FBAccessToken = FB.getAuthResponse().accessToken;
                        console.log('access token', FBAccessToken);
                        authFact.setAccessToken(FBAccessToken);
                        $location.path('/dashboard');
                        $scope.$apply();
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        }
    }]);
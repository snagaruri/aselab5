frontEnd.controller('DashCtrl', ['$scope', 'authFact', function ($scope, authFact) {
    $scope.userObj = authFact.getuserObj();
}]);
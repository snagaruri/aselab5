frontEnd.config(["$routeProvider", function($routeProvider) {
	$routeProvider

		.when("/", {
			templateUrl : 'views/home/home.html',
			controller : 'HomeCtrl'
		})
		.when("/fb/login", {
			templateUrl : 'views/process/login.html',
			controller : 'LoginCtrl'
		})
		.when('/dashboard', {
			templateUrl : 'views/home/dashboard.html',
			controller : 'DashCtrl',
			authenticated: true
		})
		.otherwise('/', {
			templateUrl : 'views/home/home.html',
			controller : 'HomeCtrl'
		});
}]);

frontEnd.run(["$rootScope", "$location", "authFact", function($rootScope, $location, authFact) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {

		/*If route is authenticated then check if the user has access token, else return to login screen*/
		if (next.$$route.authenticated) {
			var userAuth = authFact.getAccessToken();
			if (!userAuth) {
				$location.path("/");
			}
		}
	});
}]);
angular.module('wasatchSports')

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

	var checkLoggedin = function($q, $http, $state, $rootScope){
    var deferred = $q.defer();

    $http({
			method: 'GET',
			url: 'http://localhost:2929/loggedin'
		}).then(function(user) {
      if (user.data !== '')
				deferred.resolve();
      else {
        // $rootScope.message = 'You need to log in.';
				console.log('You need to log in.');
        deferred.reject();
				$state.go('login');
      }
    });
    return deferred.promise;
  };


	$httpProvider.interceptors.push(function($q, $injector) {
    return {
      response: function(response) {
        // do something on success
        return response;
      },
      responseError: function(response) {
        if (response.status === 401)
					$injector.get('$state').transitionTo('login');
        return $q.reject(response);
      }
    };
  });


	$stateProvider
		.state('home', {
			url: '/',
			controller: 'homeCtrl',
			templateUrl: './home/home.template.html'
		})
		.state('login', {
			url: '/login',
			controller: 'loginCtrl',
			templateUrl: './home/login.template.html'
		})
		.state('signup', {
			url: '/signup',
			controller: 'signupCtrl',
			templateUrl: './home/signup.template.html'
		})
		.state('profile', {
			url: '/profile',
			controller: 'profileCtrl',
			templateUrl: './home/profile.template.html'
			, resolve: { loggedin: checkLoggedin }
		})
		.state('equipment', {
			url: '/equipment',
			controller: 'equipmentCtrl',
			templateUrl: './equipment/equipment.template.html'
			, resolve: { loggedin: checkLoggedin }
		})
		.state('create', {
			url: '/create',
			controller: 'createCtrl',
			templateUrl: './equipment/create.template.html'
			, resolve: { loggedin: checkLoggedin }
		})
		.state('edit', {
			url: '/edit/:id',
			controller: 'editCtrl',
			templateUrl: './equipment/edit.template.html'
			, resolve: { loggedin: checkLoggedin }
		});

	$urlRouterProvider.otherwise('/');

})
.run(function($rootScope, $http, $state){
  $rootScope.message = '';

  $rootScope.logout = function() {
    // $rootScope.message = 'Logged out';
		console.log('Logged out');
		$http({
			method: 'GET',
			url: 'http://localhost:2929/logout'
		}).then(function() {
			window.location = "/";
			// $state.go('login');
		});
  };
});

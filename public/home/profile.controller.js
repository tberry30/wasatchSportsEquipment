angular.module('wasatchSports')
	.controller('profileCtrl', function($scope, $http, userService) {

	$scope.profileMessage = "User Profile";

	userService.getLoggedUser().then(function(result) {
		$scope.user = result;
	});

});

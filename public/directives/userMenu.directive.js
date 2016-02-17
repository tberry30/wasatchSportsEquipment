angular.module('wasatchSports')
	.directive('userMenu', function(){

	return {
		restrict: 'E',
		templateUrl: '../directives/userMenu.template.html',
		controller: function($scope, userService) {
      userService.getLoggedUser().then(function(result) {
    		$scope.user = result;
    	});
		}
	};

});

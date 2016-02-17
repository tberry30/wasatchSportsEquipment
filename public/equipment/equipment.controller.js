angular.module('wasatchSports')
	.controller('equipmentCtrl', function($scope, $state, $stateParams, equipmentService) {

  equipmentService.getEquipment().then(function(results) {
		$scope.equipment = results;
	});

	$scope.clearFilter = 

	$scope.focus = 'id';
  $scope.reverse = true;

  $scope.order = function(focus) {
    $scope.reverse = ($scope.focus === focus) ? !$scope.reverse : false;
    $scope.focus = focus;
  };


});

angular.module('wasatchSports')
	.controller('createCtrl', function($scope, $state, equipmentService) {

  $scope.create = function(obj) {
    equipmentService.createEquip(obj).then(function(result) {
      $state.go('equipment');
    });
  };

});

angular.module('wasatchSports')
	.controller('editCtrl', function($scope, $state, $stateParams, equipmentService) {

  equipmentService.getEquipById($stateParams.id).then(function(results) {
		$scope.equipToEdit = results;
	});

  $scope.update = function(obj) {
    equipmentService.updateEquip(obj).then(function(result) {
      $state.go('equipment');
    });
  };

  $scope.delete = function(id) {
    equipmentService.deleteEquip(id).then(function(result) {
      $state.go('equipment');
    });
  };

  $scope.addRepair = function(equipId, repairObj) {
    equipmentService.addEquipRepair(equipId, repairObj).then(function(result) {
      // $state.go('edit', { id : equipId });
      $state.reload('edit');
    });
  };

  $scope.checkOut = function(id) {
    equipmentService.checkOutEquip(id).then(function(result) {
      $state.reload('edit');
    });
  };

  $scope.checkIn = function(id) {
    equipmentService.checkInEquip(id).then(function(result) {
      $state.reload('edit');
    });
  };

});

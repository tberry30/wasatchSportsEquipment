angular.module('wasatchSports')
	.service('equipmentService', function($q, $http){

  this.createEquip = function(obj) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:2929/api/rentals/',
      data: obj
    }).then(function() {
      return deferred.resolve('success');
    });
    return deferred.promise;
  };

  this.getEquipment = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:2929/api/rentals'
    }).then(function(response) {
      var equipObj = response.data;
      return deferred.resolve(equipObj);
    });
    return deferred.promise;
  };

  this.getEquipById = function(id) {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:2929/api/rentals/' + id
    }).then(function(response) {
      var equipToEdit = response.data;
      return deferred.resolve(equipToEdit);
    });
    return deferred.promise;
  };

  this.updateEquip = function(obj) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:2929/api/rentals/' + obj._id,
      data: obj
    }).then(function() {
      return deferred.resolve('success');
    });
    return deferred.promise;
  };

  this.deleteEquip = function(id) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:2929/api/rentals/' + id
    }).then(function() {
      return deferred.resolve('success');
    });
    return deferred.promise;
  };

  this.addEquipRepair = function(equipId, repairObj) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:2929/api/rentals/' + equipId,
      data: {
        id: equipId,
        repair: repairObj
      }
    }).then(function() {
      return deferred.resolve('success');
    });
    return deferred.promise;
  };

  this.checkOutEquip = function(id) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:2929/api/rentals/checkout/' + id
    }).then(function() {
      return deferred.resolve('success');
    });
    return deferred.promise;
  };

  this.checkInEquip = function(id) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:2929/api/rentals/checkin/' + id
    }).then(function() {
      return deferred.resolve('success');
    });
    return deferred.promise;
  };


});

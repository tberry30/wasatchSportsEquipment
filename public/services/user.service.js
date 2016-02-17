angular.module('wasatchSports')
	.service('userService', function($q, $http){

  this.getLoggedUser = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:2929/loggedin/'
    }).then(function(response) {
      var user = response.data;
      return deferred.resolve(user);
    });
    return deferred.promise;
  };

});

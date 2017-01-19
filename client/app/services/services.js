angular.module('rain.services', [])

//TODO: angular factories/services
.factory('Weather', function($http){
	return {
    get: function() {
      console.log('WHAT');
      return $http({
        method: 'GET',
        url: 'http://api.icndb.com/jokes/random?limitTo=[nerdy,explicit]'
      }).then(function(resp) {
        console.log(resp.data);
        return resp.data;
      });
    }
  }
})
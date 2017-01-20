angular.module('rain.services', [])

//TODO: angular factories/services
.factory('Weather', function($http){

	return {
    get: function(lat, lon) {
      return $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=07a96fec5d332a2798fa83aba696d9f2'
      }).then(function(resp) {
        return resp.data;
      });
    }
  }
})